import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './component/Register'
import Login from './component/Login'
import Home from './component/Home';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;