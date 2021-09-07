import React, {useState} from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const CoinComponent = () => {
  const coins = useSelector((state) => state.allCoins.coins);
  const [search, setSearch] = useState("");
  const filteredCoins = coins.map((coin) => {
    const { id, image, name, symbol, current_price, market_cap, price_change_percentage_24h } = coin;
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
    
      const filteringCoins = coins.filter(() =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    return (
      
        <div>
        <div key={id}>
          <div>
            <img src={image} alt="crypto" /> 
            <h1>{name}</h1>
            <p>{symbol}</p>
          </div>
          <div> 
            <p>Rp {current_price.toLocaleString(['id'])}</p>
            <p>Rp {market_cap.toLocaleString(['id'])}</p>
            <p>{price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        </div>
        </div>
      );
  });
  return <>{filteredCoins}</>
};

export default CoinComponent;
