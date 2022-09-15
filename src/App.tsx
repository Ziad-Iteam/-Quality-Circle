import React from "react";
import "./App.css";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";
import { ServicesSection } from "./components/ServicesSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";

function App() {
  return (
    <div>
      <MainNav />
      <HomeSection />
      <WhoWeAreSection/>
      <hr className="w-50 mx-auto"/>
      <ServicesSection/>
    </div>
  );
}

export default App;
