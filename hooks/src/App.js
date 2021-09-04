import Home from "./page/Home";
import Converter from "./page/Converter-currency.jsx";
import Crypto from "./page/Crypto-currency.jsx";
import SebelumHome from "./page/HomeBeforeLogIn";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router> 
             <Switch>
                 <Route path="/" exact component={SebelumHome}/>
                 <Route path="/Home" exact component={Home}/>
                 <Route path="/Converter" exact component={Converter}/>
                 <Route path="/Crypto" exact component={Crypto}/> 
                 <Route path="*"><h1>404 Not Found</h1></Route>
             </Switch>
  </Router>
    
   </div>
  );
}

export default App;
