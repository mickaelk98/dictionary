import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-200 mt-5 flex justify-between items-center p-4 rounded-2xl">
      <input
        type="text"
        placeholder="keyboard"
        className="border-none outline-none bg-gray-200 w-full placeholder-black"
      />
      <div className="cursor-pointer text-3xl">
        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default SearchBar;
