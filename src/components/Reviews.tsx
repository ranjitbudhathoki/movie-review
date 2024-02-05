import StarRating from "./StartRating";

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
        <li
          key={review.id}
          className="bg-[#F2EFE5] m-4 w-96 p-4 flex flex-col gap-2"
        >
          <h2 className="text-xl font-bold">Movie name: {review.movieName}</h2>
          <StarRating defaultRating={review.rating} disabled={true} />
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
