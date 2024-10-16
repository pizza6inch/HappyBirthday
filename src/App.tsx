import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import CapooArea from "./components/CapooArea";
import { useState, useEffect } from "react";
function App() {
  const [showOther, setShowOther] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOther(true);
    }, 11000);
  }, []);

  useEffect(() => {
    if (showOther) window.location.href = "#gallery";
  }, [showOther]);

  return (
    <div className="bg-gradient-to-br from-[#F7E4DF] to-[#F0C2B2]">
      <Hero />
      {showOther && (
        <>
          <Gallery />
          <Main />
          <CapooArea />
        </>
      )}
    </div>
  );
}

export default App;
