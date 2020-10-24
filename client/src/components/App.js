import React from 'react';
import './App.css';
<<<<<<< HEAD
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

=======
import Header from './Header';
import Home from './Home';
import Account from './Account';
import Logger from './Logger';
// import { PhotoCaptureUSB } from './photo/PhotoCaptureUSB';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
>>>>>>> mandy

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>let's start hacking!</h1>
  //     </header>
  //   </div>
  // );

  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:9000/facebooklogin",
      data: {
        name: response.name,
        email: response.email
      }
    }).then(response => {
      console.log("Facebook login success", response);
    })
  }

  return (
<<<<<<< HEAD
    <div className = "facebook login">
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="661278961420678"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />,
    </div>
  )
=======
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
        </Switch>
      </div>
    </Router>
  );
>>>>>>> mandy
}

export default App;
