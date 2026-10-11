import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, Hours } from "@/components/restaurant/site";
import { restaurant, directionsUrl, contactUrl, whatsappUrl } from "@/data/restaurant";
import { pageMeta } from "@/data/metadata";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact & Opening Hours | Diyafa Restaurant Golpark",
      "Visit Diyafa at 4A Ekdalia Place, Golpark, Kolkata. Open Tuesday–Sunday, 2 PM–10 PM. Call +91 96749 36406 or send a WhatsApp enquiry.",
    ),
  component: Contact,
});
function Contact() {
  const [status, setStatus] = useState("");
  return (
    <>
      <PageIntro
        eyebrow="We’d love to hear from you"
        title="Find your way to Diyafa."
        description="Stop by for takeaway, ask about a dish, or plan your next pickup."
      />
      <section className="container section contact-grid">
        <div>
          <h2>Visit us in Golpark.</h2>
          <div className="info-row">
            <MapPin size={21} />
            <div>
              <strong>Diyafa Restaurant</strong>
              <p>{restaurant.address}, India</p>
              <Button asChild variant="link" className="px-0">
                <a href={directionsUrl} target="_blank" rel="noreferrer">
                  Get Directions on Google Maps
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="info-row">
            <Phone size={20} />
            <a href={`tel:+${restaurant.phone}`}>{restaurant.displayPhone}</a>
          </div>
          <Button asChild variant="whatsapp">
            <a href={contactUrl} target="_blank" rel="noreferrer">
              <MessageCircle />
              Contact on WhatsApp
            </a>
          </Button>
          <h3 className="text-3xl mt-8">Opening hours</h3>
          <Hours />
        </div>
        <div>
          <h2>Let’s talk.</h2>
          <p className="section-sub mb-6">Send your enquiry directly to us on WhatsApp.</p>
          <form
            className="form-grid"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const message = `Hello Diyafa!\nEnquiry: ${data.get("type")}\nName: ${data.get("name")}\nContact: ${data.get("contact")}\nMessage: ${data.get("message")}`;
              window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
              setStatus(
                "Your enquiry is ready in WhatsApp. Tap Send there to share it with Diyafa. It has not been sent by this website.",
              );
            }}
          >
            <label>
              Your name
              <input
                className="field"
                name="name"
                required
                maxLength={80}
                placeholder="Your name"
              />
            </label>
            <label>
              Phone or email
              <input
                className="field"
                name="contact"
                required
                placeholder="Your phone number or email"
                onInput={(e) => {
                  const input = e.currentTarget;
                  input.setCustomValidity(
                    /^(?:\+?[0-9 ()-]{7,20}|[^\s@]+@[^\s@]+\.[^\s@]+)$/.test(input.value)
                      ? ""
                      : "Enter a valid phone number or email address.",
                  );
                }}
                title="Enter a valid phone number or email address"
                maxLength={120}
              />
            </label>
            <label>
              Enquiry type
              <select className="field" name="type">
                <option>General enquiry</option>
                <option>Menu & availability</option>
                <option>Takeaway order</option>
                <option>Feedback</option>
              </select>
            </label>
            <label>
              Your message
              <textarea
                className="field"
                name="message"
                required
                rows={4}
                maxLength={1500}
                placeholder="How can we help?"
              />
            </label>
            <p className="note">
              Your details are used to prepare a WhatsApp message. This website does not store them.
              WhatsApp’s privacy policy applies once you open the message.
            </p>
            <Button type="submit" variant="whatsapp" size="lg">
              <MessageCircle />
              Continue to WhatsApp
            </Button>
            {status && (
              <p role="status" className="note">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
      <section className="container pb-12">
        <h2 className="font-display text-3xl mb-5">Find us on Google Maps</h2>
        <iframe
          title="Diyafa Restaurant address on Google Maps"
          src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.name + ", " + restaurant.address)}&output=embed`}
          width="100%"
          height="340"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border border-border rounded-md"
        />
        <p className="note mt-3">Map results are provided by Google for the restaurant address.</p>
      </section>
    </>
  );
}
