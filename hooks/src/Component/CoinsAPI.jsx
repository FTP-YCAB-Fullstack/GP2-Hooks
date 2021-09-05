import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "../redux/actions/coinAction";
import CoinComponent from "./CoinComponent";
import Navbar from "./Navbar";

const CoinsAPI = () => {
  const coins = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchCoins = () => async () => {
  //   const response = await axios
  //     .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  //   dispatch(setCoins(response.data));
  // };

  // useEffect(() => {
  //   fetchCoins();
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        dispatch(setCoins(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("Coins:", coins);
  return (
    <div>
      <CoinComponent />
    </div>
  );
};

export default CoinsAPI;
