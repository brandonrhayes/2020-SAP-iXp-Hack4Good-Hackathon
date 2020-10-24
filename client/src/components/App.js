import React from 'react';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
// import { PhotoCaptureUSB } from './photo/PhotoCaptureUSB';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
