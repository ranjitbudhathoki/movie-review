import { useState } from "react";
import Header from "./components/Header";
import ReviewAddForm from "./components/ReviewAddForm";
import Reviews from "./components/Reviews";
import useLocalStorage from "./hooks/useLocalStorage";

type Review = {
  id: string;
  movieName: string;
  rating: number;
  comment: string;
};

export default function App() {
  const [reviews, setReview] = useLocalStorage([], "reviews");
  const [searchTerm, setSearchTerm] = useState("");

  function onReviewAdd(newReview: Review) {
    const updatedReview = [...reviews, newReview];

    setReview(updatedReview);
  }

  function handleSearch(search: string) {
    setSearchTerm(search);
  }

  const filteredReviews: Review[] = reviews.filter((review: Review) =>
    review.movieName
      .replace(/\s/g, "")
      .toLowerCase()
      .includes(searchTerm.replace(/\s/g, "").toLowerCase())
  );

  return (
    <main className="bg-[#FFF7F1] h-screen w-full">
      <Header onSearch={handleSearch} searchTerm={searchTerm} />
      <div className="flex justify-between">
        <Reviews reviews={filteredReviews} />
        <ReviewAddForm handleReviewAdd={onReviewAdd} />
      </div>
    </main>
  );
}
