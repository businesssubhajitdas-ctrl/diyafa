import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PageIntro } from "@/components/restaurant/site";
import { gallery } from "@/components/restaurant/food-images";
import { pageMeta } from "@/data/metadata";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta(
      "Food Gallery | Diyafa Restaurant",
      "Explore illustrative kebabs, fish fry, rolls, paneer tikka and chicken snacks from the Diyafa menu.",
    ),
  component: Gallery,
});
function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const item = selected === null ? null : gallery[selected];
  return (
    <>
      <PageIntro
        eyebrow="A feast for your eyes"
        title="Flavours in focus."
        description="A glimpse of the dishes on our menu. These AI-generated illustrations are not actual photographs of Diyafa’s food."
      />
      <section className="container section">
        <div className="gallery-grid">
          {gallery.map((image, i) => (
            <Button
              className="gallery-button"
              variant="ghost"
              onClick={() => setSelected(i)}
              key={image.name}
              aria-label={`View ${image.name}`}
            >
              <img
                src={image.src}
                alt={`Illustration of ${image.name}`}
                loading="lazy"
                width={512}
                height={512}
              />
              <span>{image.name}</span>
            </Button>
          ))}
        </div>
      </section>
      <Dialog
        open={item !== null}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      >
        <DialogContent>
          {item && (
            <>
              <DialogTitle>{item.name}</DialogTitle>
              <DialogDescription>
                AI-generated food illustration, not an actual Diyafa photograph.
              </DialogDescription>
              <img
                src={item.src}
                alt={`Illustration of ${item.name}`}
                width={512}
                height={512}
                className="w-full rounded-md"
              />
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() =>
                    setSelected(((selected ?? 0) + gallery.length - 1) % gallery.length)
                  }
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelected(((selected ?? 0) + 1) % gallery.length)}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
