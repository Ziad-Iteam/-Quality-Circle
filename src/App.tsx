import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";
import { ServicesSection } from "./components/ServicesSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";

function App() {
  return (
    <div>
      <MainNav />
      <HomeSection />
      <WhoWeAreSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
