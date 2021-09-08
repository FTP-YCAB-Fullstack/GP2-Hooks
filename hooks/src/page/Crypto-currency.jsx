import Navbar from "../Component/Navbar";
import CoinsAPI from "../Component/CoinsAPI";
import ListNavCrypto from "../Component/Listnavcrypto"

function Crypto(){
    let myDate = new Date()
    console.log(myDate)

    return(
    <div>
          <Navbar/>
        <div className="pagemain">
            <div className="bodymain">
                <div className="mainconten">
                    <div>{new Date().toString()}</div>
                    <ListNavCrypto/>
                    <CoinsAPI />
                </div>
            </div>
        </div>
     </div>
    )
}

export default Crypto;