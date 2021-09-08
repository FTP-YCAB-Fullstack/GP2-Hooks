import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar";
import '../styles/home.css'
import BackgroundHome from '../assets/bck1.png'
import Footer from "../Component/Footer.jsx";

function Home (){
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
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e272e" fill-opacity="1" d="M0,256L0,64L42.4,64L42.4,224L84.7,224L84.7,64L127.1,64L127.1,288L169.4,288L169.4,224L211.8,224L211.8,256L254.1,256L254.1,32L296.5,32L296.5,64L338.8,64L338.8,288L381.2,288L381.2,0L423.5,0L423.5,96L465.9,96L465.9,0L508.2,0L508.2,224L550.6,224L550.6,128L592.9,128L592.9,224L635.3,224L635.3,96L677.6,96L677.6,64L720,64L720,160L762.4,160L762.4,96L804.7,96L804.7,192L847.1,192L847.1,160L889.4,160L889.4,64L931.8,64L931.8,96L974.1,96L974.1,224L1016.5,224L1016.5,256L1058.8,256L1058.8,256L1101.2,256L1101.2,128L1143.5,128L1143.5,160L1185.9,160L1185.9,0L1228.2,0L1228.2,96L1270.6,96L1270.6,32L1312.9,32L1312.9,288L1355.3,288L1355.3,160L1397.6,160L1397.6,256L1440,256L1440,320L1397.6,320L1397.6,320L1355.3,320L1355.3,320L1312.9,320L1312.9,320L1270.6,320L1270.6,320L1228.2,320L1228.2,320L1185.9,320L1185.9,320L1143.5,320L1143.5,320L1101.2,320L1101.2,320L1058.8,320L1058.8,320L1016.5,320L1016.5,320L974.1,320L974.1,320L931.8,320L931.8,320L889.4,320L889.4,320L847.1,320L847.1,320L804.7,320L804.7,320L762.4,320L762.4,320L720,320L720,320L677.6,320L677.6,320L635.3,320L635.3,320L592.9,320L592.9,320L550.6,320L550.6,320L508.2,320L508.2,320L465.9,320L465.9,320L423.5,320L423.5,320L381.2,320L381.2,320L338.8,320L338.8,320L296.5,320L296.5,320L254.1,320L254.1,320L211.8,320L211.8,320L169.4,320L169.4,320L127.1,320L127.1,320L84.7,320L84.7,320L42.4,320L42.4,320L0,320L0,320Z"></path></svg> */}
        <Footer/>
        </div>
    </div>
    )
}

export default Home;