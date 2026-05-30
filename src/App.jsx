import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Members from "./components/Members";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import JoinClub from "./components/JoinClub";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <Events />
      <Gallery />
      <JoinClub />
      <Footer />
    </>
  );
}
export default App;