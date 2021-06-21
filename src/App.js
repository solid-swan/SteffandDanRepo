import "./App.css";

import React, { Component } from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Navigation />
          <div className="data">
            <Route exact path="/title">
              <Title />
            </Route>
            <Route path="/title" component={Title} />

            <Route exact path="/post">
              <Post />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
