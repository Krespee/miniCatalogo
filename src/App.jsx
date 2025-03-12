import { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import SearchBar from "./components/SearchBar";
import "./App.css";
function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.trim() === "") return;
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error("Error fetching search data:", error));
  }, [search]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rick and Morty Characters</h1>
      <SearchBar search={search} onSearch={handleSearch} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {characters.length > 0 ? (
          characters.map((char) => <CharacterCard key={char.id} character={char} />)
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </div>
  );
}

export default App;
