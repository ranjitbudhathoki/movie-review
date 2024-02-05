import Search from "./Search";

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
        <a href="www.google.com" target="_blank">
          Go to animations
        </a>
      </nav>
    </header>
  );
}
