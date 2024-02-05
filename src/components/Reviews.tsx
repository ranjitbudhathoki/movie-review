type Review = {
  id: string;
  movieName: string;
  rating: number;
  comment: string;
};

type reviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: reviewsProps) {
  return (
    <ul>
      {reviews.map((review: Review) => (
        <p key={review.id}>{review.movieName}</p>
      ))}
    </ul>
  );
}
