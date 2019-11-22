import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FeaturedMovie from "./components/FeaturedMovie";
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      {/* <header className="App-header"></header> */}
      <main>
        <Route exact path="/" component={(FeaturedMovie, MovieFeed)} />
        <Route path="/detailpage/:movieId" component={DetailPageContainer} />
        <AddMovie />
      </main>
    </div>
  );
}

export default App;
