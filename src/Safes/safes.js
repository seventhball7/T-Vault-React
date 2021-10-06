import React, { useState, useEffect } from "react";
import "./safe.css";
import expand from "../assets/iconsPack/icon_arrow_white.svg";
import search from "../assets/iconsPack/search.png";
import empty from "../assets/iconsPack/empty.png";
import add from "../assets/iconsPack/add.png";
const Safes = () => {
  return (
    <div className="saferoot">
      <div className="top">
        <div className="countndown">
          <span className="count">All Safes ()</span>
          <img className="down" src={expand} alt="downarrow"></img>
        </div>
        <div className="searchnbox">
          <img className="search" src={search} alt="Search"></img>
          <input type="text" id="box" placeholder="Search"></input>
        </div>
      </div>
      {/*creating for empty*/}
      <div className="noelements">
        <img src={empty} id="empty" alt="ICON OF COMP"></img>
        {/* <img src={add} id="addnew" alt="ADD Button"></img> */}
      </div>
    </div>
  );
};
export default Safes;
