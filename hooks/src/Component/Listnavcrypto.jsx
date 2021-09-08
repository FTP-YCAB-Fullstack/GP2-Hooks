import '../styles/listcrypto.css'

function ListNavCrypto(){
    let myDate = new Date()
    console.log(myDate)

    return(
        <div className="bodylistcrypto">
            <p>{new Date().toString()}</p>
            <div className="table-crypto">
                <ul>
                    <li className="name">Name Crypto</li>
                    <li className="code">Code</li>
                    <li className="price">Price Crypto</li>
                    <li className="market">Market Cap</li>
                    <li className="pricechange">Price Change</li>
                </ul>
            </div>
        </div>
    )
}

export default ListNavCrypto;