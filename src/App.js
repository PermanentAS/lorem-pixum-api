import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Favorites } from "./pages/favorites/Favorites";
import { ImageInfo } from "./pages/image-info/ImageInfo";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/favourites">
            <Favorites />
          </Route>
          <Route path="/image-info/:id">
            <ImageInfo />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
