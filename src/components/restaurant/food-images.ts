import lollipop from "@/assets/lollipop.jpg";
import fish from "@/assets/fish-fry.jpg";
import roll from "@/assets/roll.jpg";
import tikka from "@/assets/tikka.jpg";
import malai from "@/assets/malai.jpg";
import paneer from "@/assets/paneer.jpg";
import feast from "@/assets/diyafa-feast.jpg";
export { feast };
export const gallery = [
  { src: tikka, name: "Chicken Tikka Kebabs" },
  { src: fish, name: "Bengali Fish Fry" },
  { src: roll, name: "Chicken Kebab Rolls" },
  { src: paneer, name: "Paneer Tikka" },
  { src: lollipop, name: "Chicken Snacks" },
  { src: feast, name: "A feast of flavours" },
];
export function foodImage(name: string) {
  if (/paneer|corn|potato|cheese ball/i.test(name)) return paneer;
  if (/\broll\b/i.test(name)) return roll;
  if (/fish/i.test(name)) return fish;
  if (/malai|reshmi|afghani/i.test(name)) return malai;
  if (/kebab|tandoori|paratha/i.test(name)) return tikka;
  return lollipop;
}
