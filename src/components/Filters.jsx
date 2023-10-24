import Form from "react-bootstrap/Form";
const Filters = ({ characters, setFilteredCharacters, filteredCharacters }) => {
  const filtrar = (e) => {
    const filterCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        character.species.toLowerCase().includes(e.target.value.toLowerCase()) ||
        character.house.toLowerCase().includes(e.target.value.toLowerCase()) ||
        character.gender.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredCharacters([...filterCharacters]);
  };

  const sortCharacters = (e) => {
    if (e.target.value === "1") {
      const sortedCharacters = filteredCharacters.sort((a, b) => a.house.localeCompare(b.house));
      setFilteredCharacters([...sortedCharacters]);
    } else if (e.target.value === "2") {
      const sortedCharacters = filteredCharacters.sort((a, b) => a.gender.localeCompare(b.gender));
      setFilteredCharacters([...sortedCharacters]);
    } else if (e.target.value === "3") {
      const defaultSort = characters.filter((character) => filteredCharacters.includes(character));
      setFilteredCharacters([...defaultSort]);
    }
  };

  return (
    <>
      <h3 className="search-title">Search your character</h3>
      <div className="search">
        <br />
        <input className="form-control" type="text" placeholder="Search" onChange={filtrar}></input>
        <Form.Select aria-label="Default select example" onChange={sortCharacters}>
          <option value="3">Open this select menu</option>
          <option value="1">House</option>
          <option value="2">Gender</option>
        </Form.Select>
      </div>
    </>
  );
};

export default Filters;
