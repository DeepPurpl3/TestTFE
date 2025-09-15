import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/10 ring-1 ring-primary/30 grid place-items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M3 15c4-2 8-2 12 0m2-6l4 4m-4-4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">SkyRide</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/book-ride">Commander</NavItem>
          <NavItem to="/about">À propos</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/login">Se connecter</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/register">Inscription</Link>
          </Button>
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="md:hidden border-t bg-background/80">
        <div className="container flex items-center justify-between">
          <Link to="/" className={`py-3 flex-1 text-center ${location.pathname === "/" ? "text-primary" : "text-foreground/70"}`}>Accueil</Link>
          <Link to="/book-ride" className={`py-3 flex-1 text-center ${location.pathname.startsWith("/book-ride") ? "text-primary" : "text-foreground/70"}`}>Commander</Link>
          <Link to="/about" className={`py-3 flex-1 text-center ${location.pathname.startsWith("/about") ? "text-primary" : "text-foreground/70"}`}>À propos</Link>
        </div>
      </nav>
    </header>
  );
}
