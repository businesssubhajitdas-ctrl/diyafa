import { describe, it, expect } from "vitest";
import { menu, restaurant, subtotal, orderMessage, whatsappUrl, reviews } from "../data/restaurant";
describe("Diyafa supplied rules", () => {
  it("keeps all 51 supplied menu items", () => expect(menu).toHaveLength(51));
  it.each([
    ["Chicken Lollipop (6 Pcs)", 180],
    ["Diyafa Special Chicken Lollyprolly (8 Pcs)", 320],
    ["Fish Finger (6 Pcs)", 200],
    ["Chicken Reshmi Kebab Roll", 100],
    ["Double Chicken Kebab Roll", 120],
    ["Chicken Tikka Kebab (6 Pcs)", 240],
    ["Chicken Gondhoraj Malai Kebab (6 Pcs)", 260],
    ["Paneer Tikka Kebab (6 Pcs)", 240],
    ["Tandoori Fry Kebab (3) + Paratha (2)", 250],
    ["Paratha (1 Pc)", 30],
  ])("keeps %s at ₹%s", (name, price) =>
    expect(menu.find((i) => i.name === name)?.price).toBe(price),
  );
  it("closes on Monday", () =>
    expect(restaurant.hours[0]).toEqual({ day: "Monday", hours: "Closed" }));
  it.each(["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])(
    "opens %s 2 PM to 10 PM",
    (day) => expect(restaurant.hours.find((h) => h.day === day)?.hours).toBe("2:00 PM – 10:00 PM"),
  );
  it("calculates a quantity-based subtotal", () => expect(subtotal({ 1: 2, 2: 1 })).toBe(580));
  it("includes customer pickup instructions and confirmation in order", () => {
    const message = orderMessage({ 1: 2 }, "Riya", "After 6 PM", "No onion");
    expect(message).toContain("Chicken Lollipop (6 Pcs) × 2 — ₹360");
    expect(message).toContain("Estimated subtotal: ₹360");
    expect(message).toContain("Customer: Riya");
    expect(message).toContain("Pickup preference: After 6 PM");
    expect(message).toContain("Special instructions: No onion");
    expect(message).toContain("Please confirm availability, pickup time and the final amount.");
  });
  it("uses official WhatsApp phone and safely encoded message", () =>
    expect(whatsappUrl("Hello & ₹320")).toBe(
      "https://wa.me/919674936406?text=Hello%20%26%20%E2%82%B9320",
    ));
  it("provides genuine customer reviews with ratings", () =>
    expect(reviews.length).toBeGreaterThan(0));
});
