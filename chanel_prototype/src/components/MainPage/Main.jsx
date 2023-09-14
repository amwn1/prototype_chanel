import React from "react";
import "./Main.css"; // Import your CSS file

const Main = () => {
  return (
    <div className="page"> 
      <div className="product">
        
          <img src="/bottle.png" alt="chanel_paris" className="image" /> 
        
        <div className="main_buttons">
          <button className="buy_btn">Buy</button>
          <button className="add_btn">Add</button>
        </div>
      </div>
      <div className="logo">
        <img src="/logo.png" alt="" className="logo" />
      </div>
    </div>
  );
};

export default Main;
