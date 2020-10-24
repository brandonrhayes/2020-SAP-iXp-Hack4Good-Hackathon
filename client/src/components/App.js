import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Account from './Account';
import Logger from './Logger';
import ManualLogger from './Logger/ManualLogger';
import PhotoCaptureUSB from './photo/PhotoCaptureUSB';
import Reminder from './Reminder';
// import { PhotoCaptureUSB } from './photo/PhotoCaptureUSB';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className='App-main'>
        <Switch>
          <Route path='/' key='/' component={Home} exact />
          <Route path='/home' key='/home' component={Home} />
          <Route path='/account' key='/account' component={Account} />
          <Route path='/log' key='/log' component={Logger} />
          <Route path='/manual-log' component={ManualLogger} />
          <Route path='/photo-log' component={PhotoCaptureUSB} />
          <Route path='/reminders' component={Reminder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
