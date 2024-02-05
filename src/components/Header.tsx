import Search from "./Search";

export default function Header() {
  return (
    <header className="flex  justify-around bg-[#CDFADB] h-10 items-center">
      <h2>Movies</h2>
      <Search />
      <nav>
        <a href="www.google.com" target="_blank">
          Go to animations
        </a>
      </nav>
    </header>
  );
}
