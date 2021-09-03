import Home from "./page/Home";
import CurrencyConverter from "./page/CurrencyConverter";
import CryptoCurrency from "./page/CryptoCurrency";
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
                 <Route path="/" exact component={Home}/>
                 <Route path="/Home" exact component={Home}/>
                 <Route path="/CurrencyConverter" exact component={CurrencyConverter}/>
                 <Route path="/CryptoCurrency" exact component={CryptoCurrency}/> 
             </Switch>
  </Router>
    
   </div>
  );
}

export default App;
