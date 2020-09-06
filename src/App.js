import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/postdetail/:userId">
            <PostDetail></PostDetail>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
