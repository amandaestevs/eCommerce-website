import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <NavBar page={'home'}/>
      <Hero />
    </div>
  );
}

export default Home;
