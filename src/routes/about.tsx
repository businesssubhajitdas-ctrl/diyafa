import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, ServiceStrip, VisitBand } from "@/components/restaurant/site";
import { feast } from "@/components/restaurant/food-images";
import { pageMeta } from "@/data/metadata";
export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Diyafa | Kolkata’s Takeaway Flavours",
      "Meet Diyafa Restaurant, a takeaway-focused destination for kebabs, rolls, snacks, parathas and fish dishes in Golpark, Kolkata.",
    ),
  component: About,
});
function About() {
  return (
    <>
      <PageIntro
        eyebrow="Fresh flavours. Delicious moments."
        title="A Place for Delicious Flavours."
        description="A Kolkata takeaway for the things you love to eat."
      />
      <section className="container section story-inner">
        <img
          className="story-image"
          src={feast}
          width={1536}
          height={1024}
          alt="Illustrative kebab, paratha and chicken roll feast"
          loading="lazy"
        />
        <div>
          <span className="eyebrow">Diyafa Restaurant</span>
          <h2>
            A little Kolkata.
            <br />A lot of flavour.
          </h2>
          <p>
            Diyafa Restaurant is a takeaway-focused restaurant at Ekdalia Place, Golpark. Our menu
            brings together kebabs, rolls, chicken snacks, parathas, combos and fish favourites.
          </p>
          <p>
            Whether you’re in the mood for a Chicken Reshmi Kebab Roll, a crispy Fish Fry or a plate
            of Chicken Gondhoraj Malai Kebab, there’s something to suit your craving.
          </p>
          <Button asChild>
            <Link to="/menu">
              Discover the menu
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <ServiceStrip />
      <VisitBand />
    </>
  );
}
