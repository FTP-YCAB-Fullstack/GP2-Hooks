import CoinsAPI from "../Component/CoinsAPI";
import Navbar from "../Component/Navbar";

function CurrencyConverter(){
    return(
        <div>
            <Navbar />
            <CoinsAPI />
        </div>
    )
}

export default CurrencyConverter;