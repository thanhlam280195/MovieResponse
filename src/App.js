import React from "react";
import FilmsContainer from "./containers/FilmsContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FilmDetailContainer from "./containers/FilmDetailContainer";
import NotFound from "./containers/NotFound";
function App() {
  return (
    <div style={{position: "relative"}}>
      <Header />
      <main id="mainContainer" style={{background: "#e0e0ec"}}>
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={FilmsContainer} />
              <Route exact path="/film/:id/" component={FilmDetailContainer} />
              <Route exact path="" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
