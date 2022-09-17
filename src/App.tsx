import React from "react";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";
import { ServicesSection } from "./components/ServicesSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: roc-grotesk, sans-serif;
    font-style: normal;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle/>
      <MainNav />
      <HomeSection />
      <WhoWeAreSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
