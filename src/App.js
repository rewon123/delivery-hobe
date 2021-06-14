import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './Views/Home/HomePage';
import RecipePage from './Views/RecipePage/RecipePage';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/food/:id">
          <RecipePage></RecipePage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;