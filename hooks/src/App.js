import Home from "./page/Home.jsx";
import Converter from "./page/Converter-currency.jsx";
import Crypto from "./page/Crypto-currency.jsx";
import React from "react"
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
                 <Route path="/" exact component={Home}/>
                 <Route exact path="/Home" component={Home}/>
                 <Route exact path="/Converter" component={Converter}/>
                 <Route exact path="/Crypto" component={Crypto}/> 
                 <Route exact path="*"><h1>404 Not Found</h1></Route>
             </Switch>
  </Router>
    
   </div>
  );
}

export default App;
