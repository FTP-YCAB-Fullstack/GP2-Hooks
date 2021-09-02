import Navbar from "./Component/Navbar";
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
    <>
    <Router> 
         <Navbar/>
             <Switch>
                 <Route path="/Home" exact component={Home}/>
                 <Route path="/CurrencyConverter" exact component={CurrencyConverter}/>
                 <Route path="/CryptoCurrency" exact component={CryptoCurrency}/> 
             </Switch>
  </Router>
    
   </>
  );
}

export default App;
