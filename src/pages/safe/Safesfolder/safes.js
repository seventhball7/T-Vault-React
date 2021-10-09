/*eslint no-unused-expressions: "error"*/

import React, { useState, useEffect } from "react";
import "./safe.css";
import Addsafe from "../../../components/addsafe/addsafe";
import expand from "../../../assets/iconsPack/icon_arrow_white.svg";
import search from "../../../assets/iconsPack/search.png";
import empty from "../../../assets/iconsPack/empty.png";

import { useSelector } from "react-redux";
import Cards from "../../../components/cards/cards";
import Editsafe from "../../../components/editsafe/editsafe";
import { useDispatch } from "react-redux";
import { deleteEvent, isSelected } from "../../../Redux/Actions/action";

const Safes = (props) => {
  const cardsarray = useSelector((state) => state?.safe);

  const [AddnewSafe, setAddnewsafe] = useState(false);
  const [editSafe, setEditSafe] = useState(false);
  const handleclosemodel = () => {
    setAddnewsafe(false);
    setEditSafe(false);
  };
  const [isselected, setisselected] = useState("false");

  useEffect(() => {
    setcardsDatArray(cardsarray);
  }, [cardsarray]);

  const [cardsDataArray, setcardsDatArray] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const dispatch = useDispatch();
  const handleSelect = (id) => {
    dispatch(isSelected(id));
    console.log(id, "id of selected");
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteEvent(id));
    handleclosemodel();
  };
  const handleEdit = (id) => {
    setAddnewsafe(false);
    setEditSafe(true);
    setSelectedCard(id);
  };
  return (
    <div className="saferoot">
      <div className="top">
        <div className="countndown">
          <span className="count">All Safes ({cardsarray.length})</span>
          <img className="down" src={expand} alt="downarrow"></img>
        </div>
        <div className="searchnbox">
          <img className="search" src={search} alt="Search"></img>
          <input type="text" id="box" placeholder="Search"></input>
        </div>
      </div>
      <div className="bottom">
        <div className="all-wrapper">
          {cardsarray.length == 0 && (
            <div className="noelements">
              <img src={empty} id="empty" alt="ICON OF COMP"></img>
              <button
                onClick={() => {
                  setEditSafe(false);
                  setAddnewsafe(true);
                }}
                id="createNewBtn"
              >
                +<span className="onHoverShowText">Create New Safe</span>
              </button>
            </div>
          )}

          {cardsDataArray?.map((currcard, index) => (
            <Cards
              index={index}
              key={currcard.safeName + index}
              currcard={currcard}
              onClick={handleSelect}
              handleEdit={() => handleEdit(currcard.id)}
              handleDelete={(e) => handleDelete(e, currcard.id)}
            />
          ))}
        </div>
      </div>
      {AddnewSafe && <Addsafe handleclosemodel={() => handleclosemodel()} />}
      {editSafe && (
        <Editsafe
          id={selectedCard}
          handleclosemodel={() => handleclosemodel()}
        />
      )}
      <button
        onClick={() => {
          setEditSafe(false);
          setAddnewsafe(true);
        }}
        id="createNewBtn"
      >
        +<span className="onHoverShowText">Create New Safe</span>
      </button>
    </div>
  );
};
export default Safes;
