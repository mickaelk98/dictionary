import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { LiaBookSolid } from "react-icons/lia";

function Header() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <header className="max-w-4xl mx-auto flex justify-between py-2">
      <div className="text-3xl">
        <LiaBookSolid />
      </div>
      <div className="flex items-center">
        <div className="border-r border-gray-400 mr-4">
          <select name="" id="" className="mr-5">
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans serif</option>
          </select>
        </div>
        <div className="text-2xl cursor-pointer">
          {darkTheme ? (
            <div onClick={() => setDarkTheme(!darkTheme)}>
              <BsSun />
            </div>
          ) : (
            <div onClick={() => setDarkTheme(!darkTheme)}>
              <BsMoon />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
