export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          {description || "Cette page est prête à être personnalisée. Dites-moi ce que vous souhaitez et je l'implémenterai."}
        </p>
      </div>
    </section>
  );
}
