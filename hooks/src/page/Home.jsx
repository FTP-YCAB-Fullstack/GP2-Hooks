import Navbar from "../Component/Navbar";
import '../styles/stylepage.css'

function Home (){
    return(
    <div>
        <Navbar/>
        <div className="pagemain">
            <div className="bodymain">
                <div className="mainconten">
                    <h1>INI HALAMAN HOME</h1>
                    <h3>Hallo Dunia</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;