import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import CapooArea from "./components/CapooArea";
import { useState, useEffect } from "react";
import Present from "./components/Present";

import { AppContext } from "./hooks/UseConetext";
function App() {
  const [showOther, setShowOther] = useState(true);
  const [showPresent, setShowPresent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOther(true);
    }, 11000);
  }, []);

  useEffect(() => {
    if (showOther) window.location.href = "#gallery";
  }, [showOther]);

  return (
    <AppContext.Provider value={{ showPresent, setShowPresent }}>
      <div className="bg-gradient-to-br from-[#F7E4DF] to-[#F0C2B2]">
        <Hero />
        {showOther && (
          <>
            <Gallery />
            <Main />
            <CapooArea />
            {showPresent && <Present />}
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
