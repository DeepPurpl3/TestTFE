import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RideForm {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  notes: string;
}

export default function BookRide() {
  const [form, setForm] = useState<RideForm>({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: 1,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "passengers" ? Number(value) : value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.dropoff || !form.date || !form.time) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-sky-50 to-background">
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Commander une course</h1>
            <p className="mt-4 text-muted-foreground">Réservez une voiture en quelques secondes. Saisissez vos points de départ et d'arrivée, choisissez l'heure et c'est parti.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary grid place-items-center">✓</span><span>Conducteurs vérifiés et service 24/7</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary grid place-items-center">✓</span><span>Prix transparents, sans surprise</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary grid place-items-center">✓</span><span>Notifications en temps réel</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="pickup">Départ</label>
                <Input id="pickup" name="pickup" value={form.pickup} onChange={onChange} placeholder="Adresse de départ" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="dropoff">Arrivée</label>
                <Input id="dropoff" name="dropoff" value={form.dropoff} onChange={onChange} placeholder="Adresse d'arrivée" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="date">Date</label>
                  <Input id="date" type="date" name="date" value={form.date} onChange={onChange} />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="time">Heure</label>
                  <Input id="time" type="time" name="time" value={form.time} onChange={onChange} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="passengers">Passagers</label>
                <Input id="passengers" type="number" min={1} max={6} name="passengers" value={form.passengers} onChange={onChange} />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" value={form.notes} onChange={onChange} placeholder="Instructions au conducteur" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" rows={3} />
              </div>
              <Button type="submit" className="w-full">Confirmer la course</Button>
              {submitted && (
                <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
                  Votre course a bien été enregistrée. Un conducteur sera attribué sous peu.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
