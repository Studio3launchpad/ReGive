import "./../styles/searchbar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for items near you..."
        className="search-input"
      />
      <button className="search-btn">
        Search
      </button>
    </div>
  );
}
