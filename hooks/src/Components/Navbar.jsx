import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="nav-link" to="/cryptocurrency">
            Crypto Currency
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/currencyconverter">
            Currency Converter
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
