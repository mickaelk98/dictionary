import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ setDictionary }) {
  const [value, setValue] = useState("keyboard");

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-200 mt-5 flex justify-between items-center p-4 rounded-2xl">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        // placeholder="keyboard"
        className="border-none outline-none bg-gray-200 w-full placeholder-black"
      />
      <button
        onClick={() => setDictionary(value)}
        className="cursor-pointer text-3xl"
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default SearchBar;
