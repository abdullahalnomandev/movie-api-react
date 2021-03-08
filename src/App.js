import React from 'react';
import AllMobiers from './Component/AllMovies/AllMobiers';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from './Component/MovieDetails/MovieDetails';
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div>


      <Router>
        <Header></Header>
        <Switch>

          <Route path="/movie/:id">
            <MovieDetails></MovieDetails>
          </Route>

          <Route path="/movie">
          </Route>
          
          <Route path="/home">
            <AllMobiers></AllMobiers>
            </Route>

            <Route exact path="/">
              <AllMobiers></AllMobiers>
            </Route>

            <Route path="*">
              <h1 style={{ color: 'red', textAlign: 'center', marginTop: '100px' }}>404 --NOT FOUND</h1>
            </Route>

        </Switch>
        <Footer></Footer>

      </Router>

    </div>
  );
};

export default App;