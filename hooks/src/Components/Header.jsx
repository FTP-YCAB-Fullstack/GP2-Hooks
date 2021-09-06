import React from "react";

import Navbar from "./Navbar";
import "./Header.css";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1>Currency App</h1>
      <Navbar />
    </header>
  );
};

export default MainHeader;
