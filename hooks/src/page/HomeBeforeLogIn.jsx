import { Link } from 'react-router-dom'
import '../styles/stylebeforepage.css'
import NavbarBefore from '../Component/NavbarBefore.jsx';

function HomeBeforeLogIn(){
    return(
        <div>
            <NavbarBefore/>

            <h1>Hello World</h1>
            <Link to="/home"><p>ke Home</p></Link>
        </div>
    )
}

export default HomeBeforeLogIn;