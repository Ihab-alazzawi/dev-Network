import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
