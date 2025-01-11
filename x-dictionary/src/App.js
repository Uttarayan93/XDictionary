import lib from "./Definitions";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = () => {
    if (!word || word === " ") {
      setDefinition("");
      return;
    }

    const entry = lib.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );

    if (entry) {
      setDefinition(entry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h4>Definition:</h4>
      <p>{definition}</p>
    </div>
  );
}

export default App;
