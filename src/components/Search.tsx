export default function Search({
  onSearch,
  searchTerm,
}: {
  onSearch: (val: string) => void;
  searchTerm: string;
}) {
  return (
    <input
      className="w-96 m-4  p-3 h-10"
      placeholder="search for review by movie name...."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
