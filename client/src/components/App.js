import './App.css';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';


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
}

export default App;
