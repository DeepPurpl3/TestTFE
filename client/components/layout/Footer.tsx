export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SkyRide. Tous droits réservés.</p>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/about" className="hover:text-foreground">À propos</a>
          <a href="/" className="hover:text-foreground">Accueil</a>
        </nav>
      </div>
    </footer>
  );
}
