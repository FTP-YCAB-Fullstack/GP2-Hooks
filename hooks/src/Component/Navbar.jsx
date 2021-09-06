import { Link } from "react-router-dom";

function Navbar (){
    return(
        <div>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/CurrencyConverter">Calculator</Link></li>
            <li><Link to="/CryptoCurrency">Crypto Currency</Link></li>
        </div>
    )
}

export default Navbar;