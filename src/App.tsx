import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import CapooArea from "./components/CapooArea";
import { useState, useEffect } from "react";
import { use } from "framer-motion/client";
function App() {
  const [showOther, setShowOther] = useState(false);

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
          <CapooArea />
        </>
      )}
    </div>
  );
}

export default App;
