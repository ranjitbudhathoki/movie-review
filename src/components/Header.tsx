import Search from "./Search";

import { Link } from "react-router-dom";
export default function Header({
  onSearch,
  searchTerm,
}: {
  onSearch: (val: string) => void;
  searchTerm: string;
}) {
  return (
    <header className="flex  justify-around bg-[#CDFADB] h-14 items-center">
      <h2 className="text-2xl font-extrabold">Movies</h2>
      <Search onSearch={onSearch} searchTerm={searchTerm} />
      <nav>
        <Link
          to="/animation"
          className="bg-[#FBFADA] p-3 font-bold underline border-solid border-2 text-blue-600"
        >
          Go to Animation
        </Link>
      </nav>
    </header>
  );
}
