import React from "react";
import "./App.css";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <HomeSection />
    </div>
  );
}

export default App;
