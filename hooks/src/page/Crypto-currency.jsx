import Navbar from "../Component/Navbar";
import CoinsAPI from "../Component/CoinsAPI";
import ListNavCrypto from "../Component/Listnavcrypto"

function Crypto(){
    return(
    <div>
          <Navbar/>
        <div className="pagemain">
            <div className="bodymain">
                <div className="mainconten">
                    <ListNavCrypto/>
                    <CoinsAPI />
                </div>
            </div>
        </div>
     </div>
    )
}

export default Crypto;