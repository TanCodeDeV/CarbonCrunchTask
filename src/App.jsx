import React, { useRef } from "react";
import Features from "./pages/Features";
import Hero from "./pages/Hero";

function App() {
  const featuresRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <div ref={featuresRef}>
        <Features scrollToHero={scrollToHero} />
      </div>
      <div ref={heroRef}>
        <Hero scrollToFeatures={scrollToFeatures} />
      </div>
    </div>
  );
}

export default App;
