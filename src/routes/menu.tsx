import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/restaurant/food-card";
import { PageIntro } from "@/components/restaurant/site";
import { useOrder } from "@/components/restaurant/order";
import { menu, categories } from "@/data/restaurant";
import { pageMeta } from "@/data/metadata";
export const Route = createFileRoute("/menu")({
  head: () =>
    pageMeta(
      "Menu & Prices | Diyafa Restaurant Kolkata",
      "Browse Diyafa’s complete menu of kebabs, rolls, fish snacks and paratha combos. Build your takeaway order and send it on WhatsApp.",
    ),
  component: MenuPage,
});
function MenuPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { open } = useOrder();
  const items = menu.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      i.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <PageIntro
        eyebrow="Something for every craving"
        title="The Diyafa Menu"
        description="Kebabs, rolls, crispy bites and comforting combos. Pick your favourites for takeaway."
      />
      <section className="container section">
        <div className="menu-tools">
          <div className="category-tabs" aria-label="Menu categories">
            {["All", ...categories].map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "outline"}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c === "All" ? "All Items" : c}
              </Button>
            ))}
          </div>
          <div className="search-field">
            <Search />
            <input
              className="field"
              type="search"
              aria-label="Search menu"
              placeholder="Find your favourite…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <p className="note">{items.length} dishes · Prices in Indian rupees</p>
          <Button variant="outline" onClick={open}>
            <ShoppingBag />
            View Order
          </Button>
        </div>
        {items.length ? (
          <div className="food-grid">
            {items.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search />
            <h2>No dishes found</h2>
            <p className="note">Try another search or category.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
        <p className="note mt-7">
          Prices in Indian Rupees (INR). Availability and final order amount are confirmed by the
          restaurant on WhatsApp.
        </p>
      </section>
    </>
  );
}
