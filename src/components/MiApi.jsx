import { useState, useEffect } from "react";
import MyCard from "./MyCard";
import Filters from "./Filters";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const callApi = async () => {
    try {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const json = await res.json();
      const filterImg = json.filter((ch) => ch.image !== "");
      setCharacters([...filterImg]);
      setFilteredCharacters([...filterImg]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Filters characters={characters} setFilteredCharacters={setFilteredCharacters} filteredCharacters={filteredCharacters} />
      <div className="main-card">
        {filteredCharacters.map((character) => (
          <div key={character.id}>
            <MyCard character={character} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MiApi;
