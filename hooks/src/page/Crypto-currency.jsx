import Navbar from "../Component/Navbar";
import CoinsAPI from "../Component/CoinsAPI";
import '../styles/stylepage.css'

function Crypto(){
    return(
    <div>
          <Navbar/>
        <div className="pagemain">
            <div className="bodymain">
                <div className="mainconten">
                    <CoinsAPI />
                </div>
            </div>
        </div>
     </div>
    )
}

export default Crypto;