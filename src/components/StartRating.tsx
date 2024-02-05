import { useState, useEffect } from "react";
import Star from "./Star";

type starRatingProps = {
  defaultRating: number;
  onSetRating: (rating: number) => void;
};

export default function StarRating({
  defaultRating = 1,
  onSetRating,
}: starRatingProps) {
  const [rating, setRating] = useState(defaultRating);

  useEffect(() => {
    // Reset the rating when the defaultRating prop changes
    setRating(defaultRating);
  }, [defaultRating]);

  function handleClick(rating: number) {
    setRating(rating);
    onSetRating(rating);
  }
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i: number) => (
        <Star
          key={i}
          onRate={() => handleClick(i + 1)}
          full={rating >= i + 1}
        />
      ))}
    </div>
  );
}
