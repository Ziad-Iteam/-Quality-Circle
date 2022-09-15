import React from "react";
import "./App.css";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";
import { WhoWeAreSection } from "./components/WhoWeAreSection";

function App() {
  return (
    <div>
      <MainNav />
      <HomeSection />
      <WhoWeAreSection/>
    </div>
  );
}

export default App;
