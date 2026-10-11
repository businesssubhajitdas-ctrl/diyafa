import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageSquare, ArrowUpRight, CheckCircle2, Plus, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, VisitBand } from "@/components/restaurant/site";
import { reviews as initialReviews, reviewsUrl, type Review, menu } from "@/data/restaurant";
import { pageMeta } from "@/data/metadata";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageMeta(
      "Customer Reviews | Diyafa Restaurant Kolkata",
      "Read genuine customer reviews for Diyafa Restaurant in Golpark, Kolkata. See what food lovers say about our kebabs, rolls, fish fry, and takeaway service.",
    ),
  component: ReviewsPage,
});

function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "fill-current" : "text-border"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewsPage() {
  const [reviewList, setReviewList] = useState<Review[]>(initialReviews);
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [isWriting, setIsWriting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Form states
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [dish, setDish] = useState("");
  const [comment, setComment] = useState("");

  const filteredReviews = reviewList.filter((r) =>
    filterRating === "all" ? true : Math.floor(r.rating) === filterRating,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: Date.now(),
      name: author.trim(),
      rating,
      date: "Just now",
      comment: comment.trim(),
      dish: dish.trim() || undefined,
      location: "Kolkata",
    };

    setReviewList([newRev, ...reviewList]);
    setAuthor("");
    setRating(5);
    setDish("");
    setComment("");
    setIsWriting(false);
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 6000);
  };

  return (
    <>
      <PageIntro
        eyebrow="From our customers"
        title="Good food. Honest words."
        description="Discover genuine customer feedback about Diyafa’s kebabs, rolls, and fish fry in Golpark, Kolkata."
      />

      <section className="container section">
        {/* Rating Summary Box */}
        <div className="review-summary-box">
          <div className="flex items-center gap-4">
            <span className="rating-big-num">4.9</span>
            <div>
              <RatingStars rating={5} size={20} />
              <p className="text-xs text-muted-foreground mt-1">Based on 120+ customer reviews</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            <div>
              <strong className="text-foreground text-sm block">100%</strong>
              <span>Authentic taste</span>
            </div>
            <div>
              <strong className="text-foreground text-sm block">4.9 / 5</strong>
              <span>Kebab & roll flavours</span>
            </div>
            <div>
              <strong className="text-foreground text-sm block">4.8 / 5</strong>
              <span>Takeaway packaging</span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Button
              variant="default"
              onClick={() => {
                setIsWriting(!isWriting);
                setSubmittedMessage(false);
              }}
            >
              <Plus size={16} />
              Write a Review
            </Button>
            <Button asChild variant="outline">
              <a href={reviewsUrl} target="_blank" rel="noreferrer">
                Google Reviews <ArrowUpRight size={14} />
              </a>
            </Button>
          </div>
        </div>

        {/* Feedback confirmation banner */}
        {submittedMessage && (
          <div className="bg-muted border border-gold/40 text-foreground p-4 rounded-md mb-6 flex items-center gap-3">
            <CheckCircle2 className="text-whatsapp flex-shrink-0" size={20} />
            <p className="text-sm">
              Thank you for your review! Your feedback helps fellow food enthusiasts in Kolkata
              discover Diyafa.
            </p>
          </div>
        )}

        {/* Write a review collapsible form */}
        {isWriting && (
          <form className="review-form-card" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-display text-2xl">Share Your Experience</h3>
              <Button type="button" variant="ghost" size="sm" onClick={() => setIsWriting(false)}>
                Cancel
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <label>
                Your name *
                <input
                  className="field"
                  required
                  maxLength={60}
                  placeholder="e.g. Subhajit Das"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </label>

              <label>
                Dish you enjoyed (optional)
                <select className="field" value={dish} onChange={(e) => setDish(e.target.value)}>
                  <option value="">Select a dish from menu…</option>
                  {menu.slice(0, 20).map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mb-4">
              <span className="text-xs block mb-2 font-medium">Your rating *</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((starVal) => (
                  <button
                    type="button"
                    key={starVal}
                    className="p-1 text-gold hover:scale-110 transition-transform"
                    onClick={() => setRating(starVal)}
                    aria-label={`${starVal} stars`}
                  >
                    <Star
                      size={24}
                      className={starVal <= rating ? "fill-current" : "text-border"}
                    />
                  </button>
                ))}
                <span className="text-xs text-muted-foreground ml-2 font-medium">
                  {rating === 5
                    ? "Excellent (5/5)"
                    : rating === 4
                      ? "Very Good (4/5)"
                      : `${rating} Stars`}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <label>
                Your review *
                <textarea
                  className="field"
                  required
                  rows={3}
                  maxLength={600}
                  placeholder="Tell us what you liked about the food, taste, portion, or packaging…"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" variant="default">
                Submit Review
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsWriting(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        {/* Filter controls */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex gap-2">
            <Button
              variant={filterRating === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRating("all")}
            >
              All Reviews ({reviewList.length})
            </Button>
            <Button
              variant={filterRating === 5 ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRating(5)}
            >
              5 Stars ({reviewList.filter((r) => r.rating === 5).length})
            </Button>
            <Button
              variant={filterRating === 4 ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRating(4)}
            >
              4 Stars ({reviewList.filter((r) => r.rating === 4).length})
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Showing {filteredReviews.length} customer reviews
          </p>
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length > 0 ? (
          <div className="reviews-grid">
            {filteredReviews.map((rev) => (
              <article key={rev.id} className="review-card">
                <div>
                  <div className="review-card-head mb-3">
                    <div className="review-user">
                      <div className="review-avatar">{rev.name.charAt(0).toUpperCase()}</div>
                      <div>
                        <h4 className="review-name">{rev.name}</h4>
                        <span className="review-meta">
                          {rev.location ? `${rev.location} · ` : ""}
                          {rev.date}
                        </span>
                      </div>
                    </div>
                    <RatingStars rating={rev.rating} size={15} />
                  </div>

                  {rev.dish && (
                    <div className="mb-3">
                      <span className="review-dish">
                        <ThumbsUp size={11} className="text-gold" />
                        {rev.dish}
                      </span>
                    </div>
                  )}

                  <p className="review-comment">{rev.comment}</p>
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
        ) : (
          <div className="empty-state">
            <MessageSquare size={36} />
            <h2>No reviews match this rating</h2>
            <p className="note mb-4">Try clearing the rating filter.</p>
            <Button variant="link" onClick={() => setFilterRating("all")}>
              Show all reviews
            </Button>
          </div>
        )}

        {/* Google Reviews banner */}
        <div className="mt-12 p-8 rounded-lg border border-border bg-muted/40 text-center">
          <h3 className="font-display text-2xl mb-2">Want to see more feedback?</h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-5">
            Read more customer reviews directly on Google Maps or share your own review about Diyafa
            Restaurant Golpark.
          </p>
          <Button asChild variant="outline">
            <a href={reviewsUrl} target="_blank" rel="noreferrer">
              Find Diyafa on Google Reviews <ArrowUpRight size={14} />
            </a>
          </Button>
        </div>
      </section>

      <VisitBand />
    </>
  );
}
