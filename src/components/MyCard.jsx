function MyCard({ character }) {
  return (
    <div className="card">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text">
          <strong>Species:</strong> {character.species} <br />
          <strong>Gender:</strong> {character.gender} <br />
          <strong>House:</strong> {character.house} <br />
          <strong>Date of Birth:</strong> {character.dateOfBirth} <br />
          <strong>Ancestry:</strong> {character.ancestry} <br />
          <strong>Patronus:</strong> {character.patronus} <br />
          <strong>Actor:</strong> {character.actor} <br />
        </p>
      </div>
    </div>
  );
}

export default MyCard;
