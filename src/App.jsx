import Header from "./components/Header";
import TopCards from "./components/TopCards";
import OverviewCards from "./components/OverviewCards";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${darkMode ? "dark bg-[#1f212e]" : "bg-white"} min-h-screen p-6 md:px-24`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TopCards darkMode={darkMode} />
      <OverviewCards darkMode={darkMode} />
    </div>
  );
}

export default App;
