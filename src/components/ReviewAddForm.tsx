import { FormEvent, useState } from "react";
import StarRating from "./StartRating";

type Review = {
  id: string;
  movieName: string;
  rating: number;
  comment: string;
};

type reviewAddFormProps = {
  handleReviewAdd: (review: Review) => void;
};

export default function ReviewAddForm({ handleReviewAdd }: reviewAddFormProps) {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [errors, setError] = useState({}) as any;

  function handleSubmit(e: FormEvent) {
    console.log(errors);
    e.preventDefault();
    setError({});
    let error = false;
    // if movie name is empty user should not be able to submit form
    if (movieName.trim() === "") {
      error = true;
      setError((prevErr: any) => ({
        ...prevErr,
        movieName: "Movie can't be empty",
      }));
    }
    // if comment is empty of comment is less than 5 char or logner than 100 char then user
    //should not be able to submit form
    if (comment.trim() === "") {
      error = true;
      setError((prevErr: any) => ({
        ...prevErr,
        comment: "Comment can't be empty",
      }));
    } else if (comment.length < 5 || comment.length > 100) {
      error = true;
      setError((prevErr: any) => ({
        ...prevErr,
        comment: "Comment should be between 5 to 100 char long",
      }));
    }
    // if there is still error then don't proceed further
    if (error) {
      return;
    }

    const newReview: Review = {
      id: crypto.randomUUID(),
      movieName,
      rating,
      comment,
    };

    handleReviewAdd(newReview);

    //clearing the field after successful
    setMovieName("");
    setRating(1);
    setComment("");
  }

  return (
    <form
      className="flex flex-col w-96 h-2/4 gap-5 bg-blue-200 p-8 m-4"
      onSubmit={handleSubmit}
    >
      <label>🎬 Movie name:</label>
      <input
        className="h-10 border-solid border-2"
        type="text"
        value={movieName}
        onChange={(e) => {
          setMovieName(e.target.value);
        }}
      />
      {errors?.movieName && <p className="text-red-500">{errors.movieName}</p>}
      <span className="flex  items-center gap-4">
        <label>Rating:</label>
        <StarRating defaultRating={rating} onSetRating={setRating} />
      </span>
      <label>💬 Comment: </label>
      <textarea
        className="h-10 border-solid border-2"
        cols={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {errors?.comment && <p className="text-red-500">{errors.comment}</p>}
      <button className="bg-[#74E291] px-3 py-2 rounded">Add Review</button>
    </form>
  );
}
