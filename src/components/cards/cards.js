import React from "react";
import deletebtn from "../../assets/iconsPack/delete.png";
import editbtn from "../../assets/iconsPack/edit.png";
import safeicon from "../../assets/iconsPack/safe-icon.png";

const Cards = () => {
  return (
    <div className="cardroot">
      <div className="infoCard-item">
        <img src={safeicon} alt="iconSafe" className="iconSafe"></img>
        <div className="nameninfo">
          <p className="name">
            <span className="info">Created few minutes ago</span>
          </p>
          <p className="Card-Description">
            <span></span>
            <span className="Card-Owner">Safe</span>
          </p>
        </div>
      </div>
      <img src={editbtn} alt="editIcom" className="editIcon" />
      <img src={deletebtn} className="deleteBtn"></img>
    </div>
  );
};
export default Cards;
