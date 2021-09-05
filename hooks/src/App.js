import Home from "./page/Home.jsx";
import Converter from "./page/Converter-currency.jsx";
import Crypto from "./page/Crypto-currency.jsx";
import HomeBeforeLogIn from "./page/HomeBeforeLogIn.jsx";
import Login from "./page/Login.jsx"
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

function PrivateRoute (props) {
  const data = localStorage.getItem("access");

  return !data ? <Redirect to="/Login" /> : <Route {...props}> {props.children} </Route>
}

function App() {
  return (
    <div ClassName="App">
    <Router> 
             <Switch>
                 <Route exact path="/" component={HomeBeforeLogIn}/>
                 <Route exact path="/Home" component={Home}/>
                 <Route exact path="/Converter" component={Converter}/>
                 <Route exact path="/Crypto" component={Crypto}/> 
                 <Route exact path="/Login" component={Login}/> 
                 <Route exact path="*"><h1>404 Not Found</h1></Route>
             </Switch>
  </Router>
    
   </div>
  );
}

export default App;
