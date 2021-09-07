import Navbar from "../Component/Navbar";
// import Api from "../Component/Api";
import Api from "../Component/Api"
import '../styles/stylepage.css'


function Converter(){
    return(
        <div>
            <Navbar/>
            <div className="pagemain">
                <div className="bodymain">
                    <div className="mainconten">
                        <Api />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter;