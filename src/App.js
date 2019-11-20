import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FeaturedMovie from "./components/FeaturedMovie";
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <Navbar />
      <header className="App-header">
        <FeaturedMovie />
      </header>
      <Likes />
      <AddMovie />
    </div>
  );
}

export default App;
