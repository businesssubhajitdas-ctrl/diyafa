import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type MenuItem } from "@/data/restaurant";
import { useOrder, Quantity } from "./order";

export function FoodCard({ item, featured = false }: { item: MenuItem; featured?: boolean }) {
  const { order, change } = useOrder();
  const quantity = order[item.id] ?? 0;

  return (
    <article className="food-card">
      <div className="food-content">
        <div className="food-top">
          <span className="food-category">{item.category}</span>
          {featured && <span className="food-badge-inline">Diyafa favourite</span>}
        </div>
        <h3 className="food-title">{item.name}</h3>
        <div className="food-bottom">
          <span className="price">₹{item.price}</span>
          {quantity > 0 ? (
            <Quantity id={item.id} />
          ) : (
            <Button
              variant="food"
              size="sm"
              aria-label={`Add ${item.name} to Order`}
              onClick={() => change(item.id, 1)}
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add to Order
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
