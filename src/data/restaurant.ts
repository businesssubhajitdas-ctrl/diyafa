export const restaurant = {
  name: "Diyafa Restaurant",
  tagline: "Fresh Flavours. Delicious Moments.",
  phone: "919674936406",
  displayPhone: "+91 96749 36406",
  address: "4A, Ekdalia Place, Golpark, Gariahat, Kolkata, West Bengal 700019",
  hours: [
    { day: "Monday", hours: "Closed" },
    ...["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => ({
      day,
      hours: "2:00 PM – 10:00 PM",
    })),
  ],
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.name + ", " + restaurant.address)}`;
export const reviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(restaurant.name + " Kolkata Google reviews")}`;
export function whatsappUrl(message: string) {
  return `https://wa.me/${restaurant.phone}?text=${encodeURIComponent(message)}`;
}
export const contactUrl = whatsappUrl("Hello Diyafa! I would like to place a takeaway order.");
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}
export const categories = ["Fries & Other Snacks", "Parathas & Combos", "Rolls", "Kebabs"];
export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Lollipop (6 Pcs)",
    price: 180,
    category: "Fries & Other Snacks",
  },
  {
    id: 2,
    name: "Chicken Drums of Heaven (6 Pcs)",
    price: 220,
    category: "Fries & Other Snacks",
  },
  {
    id: 3,
    name: "Diyafa Special Chicken Lollyprolly (8 Pcs)",
    price: 320,
    category: "Fries & Other Snacks",
  },
  {
    id: 4,
    name: "Gondhoraj Crunchy Chicken (1 Pc)",
    price: 130,
    category: "Fries & Other Snacks",
  },
  {
    id: 5,
    name: "Cheese Chicken Ball (8 Pcs)",
    price: 200,
    category: "Fries & Other Snacks",
  },
  {
    id: 6,
    name: "Egg Devil (Full Egg) (1 Pc)",
    price: 50,
    category: "Fries & Other Snacks",
  },
  {
    id: 7,
    name: "Egg Devil (Full Egg) / Chicken Keema (1 Pc)",
    price: 90,
    category: "Fries & Other Snacks",
  },
  {
    id: 8,
    name: "Cheese Corn Cutlet (1 Pc)",
    price: 80,
    category: "Fries & Other Snacks",
  },
  {
    id: 9,
    name: "Cheese Ball (8 Pcs)",
    price: 130,
    category: "Fries & Other Snacks",
  },
  {
    id: 10,
    name: "Fish Fry (Large) (1 Pc)",
    price: 200,
    category: "Fries & Other Snacks",
  },
  {
    id: 11,
    name: "Fish Fry (Medium) (1 Pc)",
    price: 120,
    category: "Fries & Other Snacks",
  },
  {
    id: 12,
    name: "Fish Finger (6 Pcs)",
    price: 200,
    category: "Fries & Other Snacks",
  },
  {
    id: 13,
    name: "Fish Pakoda (6 Pcs)",
    price: 210,
    category: "Fries & Other Snacks",
  },
  {
    id: 14,
    name: "Fish and Cheese Roll (1 Pc)",
    price: 240,
    category: "Fries & Other Snacks",
  },
  {
    id: 15,
    name: "Gondhoraj Fish Fry (1 Pc)",
    price: 220,
    category: "Fries & Other Snacks",
  },
  {
    id: 16,
    name: "Fish Bites/French Fries (6 Pcs)",
    price: 200,
    category: "Fries & Other Snacks",
  },
  {
    id: 17,
    name: "Chicken Cutlet (1 Pc)",
    price: 130,
    category: "Fries & Other Snacks",
  },
  {
    id: 18,
    name: "Chicken Pakoda (6 Pcs)",
    price: 170,
    category: "Fries & Other Snacks",
  },
  {
    id: 19,
    name: "Tandoori Fry Kebab (3) + Paratha (2)",
    price: 250,
    category: "Parathas & Combos",
  },
  {
    id: 20,
    name: "Paratha (1 Pc)",
    price: 30,
    category: "Parathas & Combos",
  },
  {
    id: 21,
    name: "Egg Roll",
    price: 50,
    category: "Rolls",
  },
  {
    id: 22,
    name: "Double Egg Roll",
    price: 65,
    category: "Rolls",
  },
  {
    id: 23,
    name: "Cheese Egg Roll",
    price: 75,
    category: "Rolls",
  },
  {
    id: 24,
    name: "Chicken Kebab Roll",
    price: 80,
    category: "Rolls",
  },
  {
    id: 25,
    name: "Double Chicken Kebab Roll",
    price: 120,
    category: "Rolls",
  },
  {
    id: 26,
    name: "Egg Chicken Kebab Roll",
    price: 100,
    category: "Rolls",
  },
  {
    id: 27,
    name: "Cheese Chicken Kebab Roll",
    price: 110,
    category: "Rolls",
  },
  {
    id: 28,
    name: "Chicken Seekh Kebab Roll",
    price: 80,
    category: "Rolls",
  },
  {
    id: 29,
    name: "Egg Chicken Seekh Kebab Roll",
    price: 100,
    category: "Rolls",
  },
  {
    id: 30,
    name: "Cheese Chicken Seekh Kebab Roll",
    price: 120,
    category: "Rolls",
  },
  {
    id: 31,
    name: "Chicken Reshmi Kebab Roll",
    price: 100,
    category: "Rolls",
  },
  {
    id: 32,
    name: "Egg Chicken Reshmi Kebab Roll",
    price: 120,
    category: "Rolls",
  },
  {
    id: 33,
    name: "Cheese Chicken Reshmi Kebab Roll",
    price: 130,
    category: "Rolls",
  },
  {
    id: 34,
    name: "Egg Paneer Roll",
    price: 90,
    category: "Rolls",
  },
  {
    id: 35,
    name: "Paneer Bhurji Roll",
    price: 70,
    category: "Rolls",
  },
  {
    id: 36,
    name: "Paneer Kathi Kebab Roll",
    price: 70,
    category: "Rolls",
  },
  {
    id: 37,
    name: "Potato Masala Roll",
    price: 50,
    category: "Rolls",
  },
  {
    id: 38,
    name: "Chicken Gondhoraj Malai Kebab (6 Pcs)",
    price: 260,
    category: "Kebabs",
  },
  {
    id: 39,
    name: "Pahari Chicken Tikka Kebab (6 Pcs)",
    price: 240,
    category: "Kebabs",
  },
  {
    id: 40,
    name: "Chicken Tikka Kebab (6 Pcs)",
    price: 240,
    category: "Kebabs",
  },
  {
    id: 41,
    name: "Chicken Reshmi Kebab (6 Pcs)",
    price: 250,
    category: "Kebabs",
  },
  {
    id: 42,
    name: "Chicken Seekh Kebab (3 Pcs)",
    price: 140,
    category: "Kebabs",
  },
  {
    id: 43,
    name: "Chicken Tangri Kebab (Half Plate, 2 Pcs)",
    price: 160,
    category: "Kebabs",
  },
  {
    id: 44,
    name: "Chicken Tangri Kebab (Full Plate, 4 Pcs)",
    price: 290,
    category: "Kebabs",
  },
  {
    id: 45,
    name: "Chicken Afghani Kebab (Half Plate, 2 Pcs)",
    price: 270,
    category: "Kebabs",
  },
  {
    id: 46,
    name: "Chicken Afghani Kebab (Full Plate, 4 Pcs)",
    price: 490,
    category: "Kebabs",
  },
  {
    id: 47,
    name: "Chicken Tandoori (Half Plate, 2 Pcs)",
    price: 220,
    category: "Kebabs",
  },
  {
    id: 48,
    name: "Chicken Tandoori (Full Plate, 4 Pcs)",
    price: 400,
    category: "Kebabs",
  },
  {
    id: 49,
    name: "Gondhoraj Fish Malai Kebab (4 Pcs)",
    price: 460,
    category: "Kebabs",
  },
  {
    id: 50,
    name: "Ajwani Fish Tikka Kebab (4 Pcs)",
    price: 450,
    category: "Kebabs",
  },
  {
    id: 51,
    name: "Paneer Tikka Kebab (6 Pcs)",
    price: 240,
    category: "Kebabs",
  },
];
export type Order = Record<number, number>;
export function subtotal(order: Order) {
  return menu.reduce((sum, item) => sum + item.price * (order[item.id] || 0), 0);
}
export function orderMessage(order: Order, name: string, pickup: string, instructions: string) {
  return [
    "Hello Diyafa! I would like to place a takeaway order.",
    "",
    ...menu
      .filter((item) => (order[item.id] ?? 0) > 0)
      .map(
        (item) => `${item.name} × ${order[item.id] ?? 0} — ₹${item.price * (order[item.id] ?? 0)}`,
      ),
    "",
    `Estimated subtotal: ₹${subtotal(order)}`,
    `Customer: ${name}`,
    `Pickup preference: ${pickup}`,
    instructions ? `Special instructions: ${instructions}` : "",
    "Please confirm availability, pickup time and the final amount.",
  ]
    .filter(Boolean)
    .join("\n");
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  dish?: string;
  location?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sourav Mukherjee",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "The Chicken Gondhoraj Malai Kebab is out of this world! Melt-in-mouth chicken with the fragrant Gondhoraj lime kick. A true gem in Golpark.",
    dish: "Chicken Gondhoraj Malai Kebab (6 Pcs)",
    location: "Golpark, Kolkata",
  },
  {
    id: 2,
    name: "Ananya Sen",
    rating: 5,
    date: "1 month ago",
    comment:
      "Best Fish Fry around Ekdalia Place. Authentic thick bhetki fillet, thin crispy crumb coating, and served with pungent mustard kasundi. Top notch quality!",
    dish: "Fish Fry (Large) (1 Pc)",
    location: "Gariahat, Kolkata",
  },
  {
    id: 3,
    name: "Rohit Banerjee",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Diyafa Special Chicken Lollyprolly and Reshmi Kebab Rolls are our go-to evening snacks. Pocket-friendly prices, generous portions, and fast WhatsApp order pickup.",
    dish: "Diyafa Special Chicken Lollyprolly (8 Pcs)",
    location: "Ballygunge, Kolkata",
  },
  {
    id: 4,
    name: "Sreeparna Das",
    rating: 5,
    date: "1 month ago",
    comment:
      "Ordered through WhatsApp for family evening get-together. The Chicken Tikka and Cheese Chicken Balls were hot and tasty. Super easy ordering experience!",
    dish: "Chicken Tikka Kebab (6 Pcs)",
    location: "Southern Avenue, Kolkata",
  },
  {
    id: 5,
    name: "Debjyoti Roy",
    rating: 5,
    date: "2 months ago",
    comment:
      "Drums of Heaven and Double Chicken Kebab Roll are absolute must-tries. Crispy, spicy and full of flavour every single time.",
    dish: "Chicken Drums of Heaven (6 Pcs)",
    location: "Dhakuria, Kolkata",
  },
  {
    id: 6,
    name: "Poulomi Chatterjee",
    rating: 5,
    date: "2 months ago",
    comment:
      "Crispy cheese corn cutlet and paneer tikka kebabs were so fresh. Excellent vegetarian options and quick takeaway service.",
    dish: "Cheese Corn Cutlet (1 Pc)",
    location: "Jodhpur Park, Kolkata",
  },
];
