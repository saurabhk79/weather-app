import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ getWeather }) => {
  const [text, setText] = useState("");

  const handleSearchCity = (e) => {
    e.preventDefault();
    console.log(text);

    getWeather(text)
  };
  return (
    <form>
      <div></div>
      <input
        type="text"
        placeholder="Enter a location"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={handleSearchCity}>
        o
      </button>
    </form>
  );
};

export default Searchbar;
