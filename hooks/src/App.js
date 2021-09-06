import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
// import PrivateRoute from "./Components/PrivateRoute";

import CryptoCurrency from "./pages/CryptoCurrency";
import CurrencyConverter from "./pages/CurrencyConverter";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Login /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/currencyconverter"
            exact
            component={CurrencyConverter}
          />
          <PrivateRoute
            path="/cryptocurrency"
            exact
            component={CryptoCurrency}
          />
          {/* <PrivateRoute
            path="/currencyconverter"
            exact
            component={CurrencyConverter}
          />
          <PrivateRoute
            path="/currencyconverter"
            exact
            component={CryptoCurrency}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
