import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar";
import '../styles/home.css'
import BackgroundHome from '../assets/bck1.png'
import Footer from "../Component/Footer.jsx";

function Home (){
    let myDate = new Date()
    console.log(myDate)
    return(
    <div>
        <Navbar/>
        <div className="pagehome">
            <div className="bodyhome">
                    <div className="titlehome">
                        <h1>Currency is web with the <br></br> most accurate rate and <br></br>crypto info</h1>
                        <h6>Beneficial currency exchange with accurate rate</h6>
                        <Link className="btn1" to="/converter">Currency Exchange</Link>
                        <Link className="btn2" to="/crypto">Crypto List</Link>
                    </div>
                    <div className="image">
                        <img src={BackgroundHome} alt="" srcset="" />
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Home;