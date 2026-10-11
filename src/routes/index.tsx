import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin, Star, CheckCircle2, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/restaurant/food-card";
import { feast, foodImage } from "@/components/restaurant/food-images";
import { ServiceStrip, VisitBand } from "@/components/restaurant/site";
import { menu, restaurant, contactUrl, directionsUrl, reviews } from "@/data/restaurant";
import { pageMeta } from "@/data/metadata";
export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta(
      "Diyafa Restaurant Kolkata | Kebabs, Rolls & Fish Fry",
      "Explore Diyafa Restaurant in Golpark, Kolkata. Browse kebabs, chicken rolls, fish fry, snacks and paratha combos with menu prices and WhatsApp ordering.",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: restaurant.name,
          telephone: "+919674936406",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4A, Ekdalia Place, Golpark, Gariahat",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700019",
            addressCountry: "IN",
          },
          servesCuisine: ["Kebabs", "Rolls", "Fish dishes", "Indian"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "14:00",
              closes: "22:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});
function Home() {
  const popularNames = [
    "Diyafa Special Chicken Lollyprolly",
    "Fish Fry (Large)",
    "Chicken Reshmi Kebab Roll",
    "Chicken Tikka Kebab",
    "Chicken Lollipop",
    "Double Chicken Kebab Roll",
    "Fish Finger",
    "Chicken Gondhoraj Malai Kebab",
    "Paneer Tikka Kebab",
    "Tandoori Fry Kebab",
  ];
  const popular = popularNames.flatMap((name) => {
    const item = menu.find((i) => i.name.startsWith(name));
    return item ? [item] : [];
  });
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src={feast}
          alt="Illustrative feast of chicken kebabs, a roll, paratha and chutney"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="container hero-inner">
          <span className="eyebrow">Fresh Flavours. Delicious Moments.</span>
          <h1>
            Discover the
            <br />
            Taste of <em>Diyafa.</em>
          </h1>
          <p className="hero-copy">
            Delicious kebabs, flavourful rolls, crispy snacks and fresh fish favourites in the heart
            of Kolkata.
          </p>
          <div className="hero-actions">
            <Button asChild variant="gold" size="lg">
              <Link to="/menu">
                Explore Our Menu
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href={contactUrl} target="_blank" rel="noreferrer">
                <MessageCircle />
                Order on WhatsApp
              </a>
            </Button>
          </div>
          <a className="hero-location" href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPin size={15} />
            4A, Ekdalia Place · Golpark, Kolkata
            <ArrowRight size={13} />
          </a>
        </div>
        <span className="photo-disclaimer">AI-generated food illustration</span>
      </section>
      <ServiceStrip />
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">A taste of our favourites</span>
            <h2>Made to make you hungry.</h2>
            <p className="section-sub">
              From sizzling kebabs to crispy bites, find your next favourite.
            </p>
          </div>
          <Button asChild variant="link">
            <Link to="/menu">
              View Full Menu
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="food-grid">
          {popular.map((item) => (
            <FoodCard key={item.id} item={item} featured />
          ))}
        </div>
      </section>
      <section className="section bg-card border-y border-border">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Customer reviews</span>
              <h2>Loved by Kolkata Food Lovers.</h2>
              <p className="section-sub">
                Real words from our takeaway regulars in Golpark and South Kolkata.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/reviews">
                View All Reviews
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
          <div className="reviews-grid">
            {reviews.slice(0, 3).map((r) => (
              <article key={r.id} className="review-card">
                <div>
                  <div className="review-card-head mb-3">
                    <div className="review-user">
                      <div className="review-avatar">{r.name.charAt(0)}</div>
                      <div>
                        <h4 className="review-name">{r.name}</h4>
                        <span className="review-meta">
                          {r.location} · {r.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < r.rating ? "fill-current" : "text-border"}
                        />
                      ))}
                    </div>
                  </div>
                  {r.dish && (
                    <div className="mb-3">
                      <span className="review-dish">
                        <ThumbsUp size={11} className="text-gold" />
                        {r.dish}
                      </span>
                    </div>
                  )}
                  <p className="review-comment">{r.comment}</p>
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="verified-tag">
                    <CheckCircle2 size={13} />
                    Verified Customer
                  </span>
                  <span>Diyafa Golpark</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="story-band">
        <div className="container story-inner">
          <img
            className="story-image"
            src={foodImage("Chicken Reshmi Kebab Roll")}
            alt="Illustrative chicken rolls with flaky paratha"
            width={512}
            height={512}
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Hello, we’re Diyafa</span>
            <h2>
              A Place for
              <br />
              Delicious Flavours.
            </h2>
            <p>
              In the neighbourhood of Golpark, Diyafa brings together Kolkata’s love for flavour.
              Discover kebabs, satisfying rolls, crispy snacks, parathas and fish dishes — all in
              one takeaway destination.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">
                A little more about us
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <VisitBand />
    </>
  );
}
