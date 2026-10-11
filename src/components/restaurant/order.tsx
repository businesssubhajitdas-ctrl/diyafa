import { createContext, useContext, useState, type ReactNode } from "react";
import { ShoppingBag, Plus, Minus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { menu, subtotal, orderMessage, whatsappUrl, type Order } from "@/data/restaurant";
interface OrderContextType {
  order: Order;
  change: (id: number, delta: number) => void;
  open: () => void;
}
const OrderContext = createContext<OrderContextType | null>(null);
export function useOrder() {
  const value = useContext(OrderContext);
  if (!value) throw new Error("Order provider missing");
  return value;
}
export function Quantity({ id }: { id: number }) {
  const { order, change } = useOrder();
  return (
    <div className="quantity-control">
      <Button
        variant="outline"
        size="icon"
        aria-label={`Decrease ${menu.find((i) => i.id === id)?.name}`}
        onClick={() => change(id, -1)}
      >
        <Minus />
      </Button>
      <span>{order[id] || 0}</span>
      <Button
        variant="outline"
        size="icon"
        aria-label={`Increase ${menu.find((i) => i.id === id)?.name}`}
        onClick={() => change(id, 1)}
      >
        <Plus />
      </Button>
    </div>
  );
}
export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<Order>({});
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("As soon as available");
  const [instructions, setInstructions] = useState("");
  const change = (id: number, delta: number) =>
    setOrder((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }));
  const count = Object.values(order).reduce((a, b) => a + b, 0);
  return (
    <OrderContext.Provider value={{ order, change, open: () => setOpen(true) }}>
      {children}
      {count > 0 && (
        <Button className="order-trigger" size="lg" onClick={() => setOpen(true)}>
          <ShoppingBag /> Your order ({count}) <span>₹{subtotal(order)}</span>
        </Button>
      )}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="order-panel">
          <DialogTitle className="font-display text-3xl">Your takeaway order</DialogTitle>
          <DialogDescription>Good food, just a message away.</DialogDescription>
          {count === 0 ? (
            <p className="note py-8">Your order is empty. Add something delicious from the menu.</p>
          ) : (
            <>
              <div>
                {menu
                  .filter((i) => (order[i.id] ?? 0) > 0)
                  .map((i) => (
                    <div className="cart-row" key={i.id}>
                      <div>
                        <p>{i.name}</p>
                        <small>₹{i.price} each</small>
                      </div>
                      <Quantity id={i.id} />
                    </div>
                  ))}
              </div>
              <div className="cart-total">
                <span>Estimated subtotal</span>
                <span>₹{subtotal(order)}</span>
              </div>
              <form
                className="form-grid"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(
                    whatsappUrl(orderMessage(order, name.trim(), pickup, instructions.trim())),
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                <label>
                  Your name
                  <input
                    className="field"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name for your order"
                    maxLength={80}
                  />
                </label>
                <label>
                  Pickup preference
                  <select
                    className="field"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  >
                    <option>As soon as available</option>
                    <option>Within an hour, subject to confirmation</option>
                    <option>I’ll arrange a pickup time on WhatsApp</option>
                  </select>
                </label>
                <label>
                  Special instructions (optional)
                  <textarea
                    className="field"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Any requests for the restaurant?"
                    maxLength={1000}
                  />
                </label>
                <p className="note">
                  Your order opens as a WhatsApp message and is not automatically confirmed. Diyafa
                  will confirm availability, pickup time and the final amount. No payment is taken
                  here.
                </p>
                <Button type="submit" variant="whatsapp" size="lg">
                  <MessageCircle />
                  Send Order on WhatsApp
                </Button>
                <p className="note">
                  Your details are sent only to Diyafa through WhatsApp. This website does not store
                  them.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </OrderContext.Provider>
  );
}
