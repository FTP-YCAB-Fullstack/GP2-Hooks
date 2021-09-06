import { Link } from "react-router-dom";
import '../styles/navbarbefore.css'
import Logo from '../assets/logo.png'
import '../assets/bck1.png'

function NavbarBefore (){
    return(
        <div className="bodybefore">
        <div className="navbarbefore">
            <div className="logobefore">
               <span><Link to="/Home"><img src={Logo} alt="" /></Link></span> 
                <span><Link to="/Home"><h3>Currency</h3></Link></span>
            </div>
            <div className="listbefore">
              <li><Link className="linkbefore" to="/">Home</Link></li>
            </div>
        </div>
        </div>
    )
}

export default NavbarBefore;