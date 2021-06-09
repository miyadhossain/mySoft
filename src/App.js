import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChooseYourMs from "./components/ChooseYourMs";
import Footer from "./components/Footer";
import GamePass from "./components/GamePass";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MSResponse from "./components/MSResponse";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import LearnMore from "./pages/microsoft_page/LearnMore";
import Showcase from "./pages/microsoft_page/Showcase";
import Video from "./pages/microsoft_page/Video";
import OfficeGrid from "./pages/office_page/OfficeGrid";
import ShowcaseOffice from "./pages/office_page/ShowcaseOffice";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Hero />
        <ChooseYourMs />
        <Section2 />
        <GamePass />
        <Section3 />
        <MSResponse />
      </Route>
      <Route path="/mySoft">
        <Showcase />
        <Video />
        <LearnMore />
      </Route>
      <Route path="/office">
        <ShowcaseOffice />
        <OfficeGrid />
        <LearnMore />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
