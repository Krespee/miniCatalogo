import "../App.css";

function CharacterCard({ character }) {
    return (
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", margin: "10px", width: "200px", textAlign: "center" }}>
        <img src={character.image} alt={character.name} style={{ width: "100px", borderRadius: "50%" }} />
        <h3>{character.name}</h3>
        <p>{character.status} - {character.species}</p>
      </div>
    );
  }
export default CharacterCard;
