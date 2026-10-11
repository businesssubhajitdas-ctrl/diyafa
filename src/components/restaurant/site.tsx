import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChefHat,
  Menu as MenuIcon,
  X,
  MessageCircle,
  MapPin,
  Clock,
  ShoppingBag,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant, contactUrl, directionsUrl, categories } from "@/data/restaurant";
export const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Diyafa Restaurant home">
      <span className="brand-mark">
        <ChefHat size={28} strokeWidth={1.3} />
      </span>
      <span>
        <span className="brand-name">Diyafa</span>
        <span className="brand-sub">Restaurant</span>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-order" size="lg">
          <a href={contactUrl} target="_blank" rel="noreferrer">
            <MessageCircle />
            <span>Order on WhatsApp</span>
          </a>
        </Button>
        <Button
          className="mobile-trigger"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <MenuIcon />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function ServiceStrip() {
  return (
    <div className="service-strip">
      <div className="container service-inner">
        <div className="service-feature">
          <ShoppingBag />
          <div>
            <strong>Made for takeaway</strong>
            <small>Your favourites, ready to go</small>
          </div>
        </div>
        <div className="service-feature">
          <MapPin />
          <div>
            <strong>In the heart of Golpark</strong>
            <small>Ekdalia Place, Kolkata</small>
          </div>
        </div>
        <div className="service-feature">
          <Clock />
          <div>
            <strong>Tue–Sun · 2 PM–10 PM</strong>
            <small>Closed on Mondays</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-heading">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export function Hours() {
  return (
    <div className="hours-list">
      {restaurant.hours.map((h) => (
        <div className="hours-row" key={h.day}>
          <span>{h.day}</span>
          <span className={h.hours === "Closed" ? "text-primary font-semibold" : ""}>
            {h.hours}
          </span>
        </div>
      ))}
    </div>
  );
}
export function VisitBand() {
  return (
    <section className="visit-band">
      <div className="container visit-inner">
        <div>
          <h2>Your next delicious moment awaits.</h2>
          <p>Visit us at Ekdalia Place, Golpark. Pick up your favourites and enjoy.</p>
        </div>
        <Button asChild variant="gold" size="lg">
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPin />
            Get Directions
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>Fresh Flavours. Delicious Moments.</p>
            <p className="mt-3 max-w-60">
              Kebabs, rolls, crispy snacks and fish favourites. Your Kolkata takeaway.
            </p>
          </div>
          <div>
            <h4>Explore Diyafa</h4>
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>On the menu</h4>
            <ul>
              {categories.map((c) => (
                <li key={c}>
                  <Link to="/menu">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Find us</h4>
            <p>{restaurant.address}</p>
            <a href={`tel:+${restaurant.phone}`} className="flex items-center gap-2 text-xs mt-3">
              <Phone size={13} />
              {restaurant.displayPhone}
            </a>
            <p className="mt-3">
              Tuesday–Sunday: 2:00 PM–10:00 PM
              <br />
              Monday: Closed
            </p>
            <a
              href={contactUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary text-xs inline-flex items-center gap-2 mt-3"
            >
              <MessageCircle size={14} />
              WhatsApp us
              <ArrowUpRight size={12} />
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary text-xs block mt-2"
            >
              Get directions ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Diyafa Restaurant. All rights reserved.</span>
          <span>
            Food images are AI-generated illustrations, not photographs of Diyafa’s dishes.
          </span>
        </div>
      </div>
    </footer>
  );
}
