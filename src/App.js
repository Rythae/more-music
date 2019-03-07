import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Navigationbar from './components/layout/Navigationbar';
import Footer from './components/layout/Footer';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import './App.css';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navigationbar />
            <div>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
