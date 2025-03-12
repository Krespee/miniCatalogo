import { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        
        const characterData = data.results.map((char) => ({
          name: char.name,
          image: char.image,
          status: char.status,
        }));
        
        setCharacters(characterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchCharacters();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search.trim() === "") return;
    
    const fetchSearchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
        const data = await response.json();
        
        if (data.results) {
          setCharacters(data.results.map((char) => ({
            name: char.name,
            image: char.image,
            status: char.status,
          })));
        } else {
          setCharacters([]);
        }
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
    
    fetchSearchCharacter();
  }, [search]);

  return (
    <div className="app-container">
      <h1>Rick and Morty Catalog</h1>
      <SearchBar search={search} onSearch={handleSearch} />
      <div className="character-list">
        {characters.length > 0 ? (
          characters.map((char, index) => <CharacterCard key={index} character={char} />)
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </div>
  );
}
export default App;
