import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="bg-gradient-to-b from-sky-100 via-sky-50 to-background">
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" /> Nouveau: réservation instantanée
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Partagez la route, vivez la ville avec <span className="text-primary">SkyRide</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              L'application de voiture partagée simple, rapide et sûre. Commandez une course en quelques clics et profitez d'une expérience premium.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link to="/book-ride">Commander une course</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/about">En savoir plus</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3 min</div>
                <div className="text-sm text-muted-foreground">Temps d'attente moyen</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border bg-card p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-400/30 via-sky-300/20 to-sky-200/30 grid place-items-center">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M3 13h2l3-6h6l3 6h2a2 2 0 0 1 2 2v3H1v-3a2 2 0 0 1 2-2Zm4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Prochaine course</div>
                  <div className="font-semibold">Aéroport → Centre-ville</div>
                </div>
                <Button asChild>
                  <Link to="/book-ride">Réserver</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature title="Sécurisé" desc="Conducteurs vérifiés, suivi en temps réel.">
            <IconShield />
          </Feature>
          <Feature title="Abordable" desc="Tarifs transparents, pas de frais cachés.">
            <IconWallet />
          </Feature>
          <Feature title="Rapide" desc="Une voiture en quelques minutes, partout.">
            <IconBolt />
          </Feature>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
        {children}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconWallet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h15a3 3 0 0 1 3 3v7H3V7Zm0 0V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
