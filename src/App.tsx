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

  function onReviewAdd(newReview: Review) {
    const updatedReview = [...reviews, newReview];

    setReview(updatedReview);
  }

  return (
    <main className="bg-[#FFF7F1] h-screen w-full">
      <Header />
      <div className="flex justify-between">
        <Reviews reviews={reviews} />
        <ReviewAddForm handleReviewAdd={onReviewAdd} />
      </div>
    </main>
  );
}
