import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar (){
    return(
        <div className="body">
        <div className="navbar">
            <div className="logo">
                <Link to="/Home"><img src="" alt="" /></Link>
                <Link to="/Home"><h3>Currency</h3></Link>
            </div>
            <div className="list">
            <li><Link className="link" to="/Home">Home</Link></li>
            <li><Link className="link" to="/Converter">Calculator</Link></li>
            <li><Link className="link" to="/Crypto">Crypto Currency</Link></li>
            </div>
        </div>
    </div>
    )
}

export default Navbar;