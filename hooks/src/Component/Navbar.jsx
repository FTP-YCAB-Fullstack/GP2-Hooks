import { Link } from "react-router-dom";

function Navbar (){
    return(
        <div>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/CurrencyConverter">Caculator</Link></li>
            <li><Link to="/CryptoCurrency">Crypto Currenty</Link></li>
        </div>
    )
}

export default Navbar;