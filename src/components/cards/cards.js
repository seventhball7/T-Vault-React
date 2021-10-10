/* eslint-disable no-undef */
import React, { useState } from "react";
import "./cards.css";
import deletebtn from "../../assets/iconsPack/delete.png";
import editbtn from "../../assets/iconsPack/edit.png";
import safeicon from "../../assets/iconsPack/safe-icon.png";
import Editsafe from "../editsafe/editsafe";
const Cards = (props) => {
  const { currcard, handleEdit, handleDelete } = props;

  return (
    <div className="cardroot">
      <div
        className="cardrootright"
        onClick={() => {
          props.setselectcardID(currcard.id);
          console.log(currcard.id, "ID in selcted");
        }}
      >
        <div className="imgtag">
          <img src={safeicon} alt="iconSafe" className="iconSafe" />
        </div>

        <div className="nameninfocontainer">
          <div className="nameinfo">
            <div className="name">{currcard.safeName} /</div>

            <div>{currcard.Description}</div>
          </div>
          <div className="nameinfobottom">
            <div>Last Updated: today</div>
          </div>
        </div>
      </div>
      {/* {isEditClicked && (
        <Editsafe
          id={currcard.id}
          handleclosemodel={() => handleclosemodel()}
        />
      )} */}

      <div className="cardrootleft">
        <div onClick={() => handleEdit(currcard)}>
          <img src={editbtn} alt="editIcom" className="editIcon" />
        </div>
        <div onClick={handleDelete}>
          <img src={deletebtn} className="deleteBtn" />
        </div>
      </div>
    </div>
  );
};
export default Cards;
