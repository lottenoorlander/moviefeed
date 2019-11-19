import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
  return (
    <div className="container">
      <Navbar />
      <header className="App-header">
        <FeaturedMovie />
      </header>
    </div>
  );
}

export default App;
