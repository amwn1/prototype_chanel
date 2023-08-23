import React from "react";
import "./Main.css";
const Main = () => {
  return (
       <div className="page">
      <div className="product">
        <div className="image">
          <img src="./public/bottle.png" alt="chanel_paris" />
        </div>
        <div className="main_buttons">
          <button className="buy_btn">Buy</button>
          <button className="add_btn">Add</button>
        </div>
      </div>
      <div className="logo">
        <img src="./public/logo.png" alt="" />
      </div>
      </div>
      
  );
};

export default Main;
