import React from "react";

const Coin = ({ image, name, symbol, price, volume, priceChange }) => {
  return (
    <div>
      <div>{/* Crypto Name and image*/}
        <img src={image} alt="crypto" /> 
        <h1>{name}</h1>
        <p>{symbol}</p>
      </div>
      <div> {/* Crypto Value and Percentage*/}
        <p>Rp {price.toLocaleString(['id'])}</p>
        <p>Rp {volume.toLocaleString(['id'])}</p>
        <p>{priceChange.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Coin;
