import Home from "./page/Home.jsx";
import Converter from "./page/Converter-currency.jsx";
import Crypto from "./page/Crypto-currency.jsx";
import React from "react"
import PageBeforeLogin from "./page/PageBeforeLogin.jsx"
import Login from "./page/Login.jsx"
import PrivateRoute from "./Component/PrivateRoute"
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div ClassName="App">
    <Router> 
             <Switch>
                <Route path="/" exact component={PageBeforeLogin} />
                <PrivateRoute path="/Home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/converter"exact component={Converter}/>
                <PrivateRoute path="/crypto" exact component={Crypto}/>
             </Switch>
  </Router>
    
   </div>
  );
}

export default App;
