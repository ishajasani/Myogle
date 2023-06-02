import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 border-b dark:border-gray-700 border-gray-200 flex flex-wrap sm:justify-between justify-center items-center">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold dark:text-white">MyGoogle</p>
        </Link>
        <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shawdow-lg" > 
        {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
      </div>
      <Search/>
    </div>
  );
};

export default Navbar;
