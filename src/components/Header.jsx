import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <nav className="flex flex-row justify-between items-center w-full md:flex-row justify-between items-center pb-6 md:pb-0 border-slate-700">
      <div>
        <h1
          className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          Social Media Dashboard
        </h1>
        <p
          className={`text-sm font-bold mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Total Followers: 23,004
        </p>
      </div>
      <div className="flex justify-between items-center sm:justify-end sm:auto gap-3 mt-4 sm:mt-0 sm:pt-0 border-slate-200 dark:border-t-0">
        <span
          className={`text-sm font-bold transition-all ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Dark Mode
        </span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 relative shrink-0 flex items-center cursor-pointer ${darkMode ? "bg-gradient-to-r from-sky-400 to-emerald-500 justify-end" : "bg-slate-300 justify-start"}`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${darkMode ? "bg-[#252a41]" : "bg-white"}`}
          />
        </button>
      </div>
    </nav>
  );
}

export default Header;
