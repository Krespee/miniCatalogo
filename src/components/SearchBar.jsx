import "../App.css";

function SearchBar({ search, onSearch }) {
    return (
      <input 
        type="text" 
        placeholder="Search character..." 
        value={search} 
        onChange={onSearch} 
        style={{ padding: "8px", width: "80%", maxWidth: "300px", marginBottom: "20px" }}
      />
    );
  }
export default SearchBar;
