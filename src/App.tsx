import React from "react";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import { MainNav } from "./components/MainNav";
import { ServicesSection } from "./components/ServicesSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";
import { createGlobalStyle } from "styled-components";
import { ProductSection } from "./components/ProductSection";

const GlobalStyle = createGlobalStyle`
* {
    font-family: roc-grotesk, sans-serif;
    font-style: normal;
}
body {
  padding-top: 80px !important;
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
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
