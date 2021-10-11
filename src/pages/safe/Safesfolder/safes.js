/*eslint no-unused-expressions: "error"*/

import React, { useState, useEffect, useRef } from "react";
import "./safe.css";
import Addsafe from "../../../components/addsafe/addsafe";
import expand from "../../../assets/iconsPack/icon_arrow_white.svg";
import search from "../../../assets/iconsPack/search.png";
import empty from "../../../assets/iconsPack/empty.png";

import { useSelector } from "react-redux";
import Cards from "../../../components/cards/cards";
import Editsafe from "../../../components/editsafe/editsafe";
import { useDispatch } from "react-redux";
import { deleteEvent, isSelected } from "../../../redux/Actions/action";
import { checkPropTypes } from "prop-types";

const Safes = (props) => {
  {
    console.log(props);
  }
  const cardsarray = useSelector((state) => state.safe);
  const [AddnewSafe, setAddnewsafe] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newSafeList, setNewSafeList] = useState([]);
  const [editSafe, setEditSafe] = useState(false);
  const handleclosemodel = () => {
    setAddnewsafe(false);
    setEditSafe(false);
  };
  const [isselected, setisselected] = useState("false");
  const inputRef = useRef("");
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
    props.setselectcardID(0);
  };
  const handleEdit = (id) => {
    setAddnewsafe(false);
    setEditSafe(true);
    setSelectedCard(id);
  };
  const filteredAllSafes = () => {
    const searchText = inputRef?.current.value;
    console.log(searchText);
    setSearchTerm(searchText);
    if (searchText !== "") {
      const newAllSafes = cardsarray.filter((currcard) => {
        return currcard?.safeName
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setNewSafeList(newAllSafes);
    } else {
      return cardsarray;
    }
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
          <input
            ref={inputRef}
            type="text"
            id="box"
            placeholder="Search"
            value={searchTerm}
            onChange={filteredAllSafes}
          ></input>
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
          <ul className="cardslist">
            {!searchTerm &&
              cardsDataArray?.map(
                (currcard, index) => (
                  // currcard.secret == undefined && (
                  <li key={index} className="card">
                    <Cards
                      setselectcardID={props.setselectcardID}
                      index={index}
                      key={index}
                      currcard={currcard}
                      onClick={handleSelect}
                      handleEdit={() => handleEdit(currcard.id)}
                      handleDelete={(e) => handleDelete(e, currcard.id)}
                    />
                  </li>
                )
                //)
              )}

            {searchTerm &&
              newSafeList &&
              newSafeList.map((currcard, index) => {
                return (
                  <li key={currcard} className="cardsearch">
                    <Cards
                      setselectcardID={props.setselectcardID}
                      index={index}
                      key={index}
                      currcard={currcard}
                      onClick={handleSelect}
                      handleEdit={() => handleEdit(currcard.id)}
                      handleDelete={(e) => handleDelete(e, currcard.id)}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      {AddnewSafe && (
        <Addsafe
          handleclosemodel={() => handleclosemodel()}
          addSafe={props.addSafe}
        />
      )}
      {editSafe && (
        <Editsafe
          id={selectedCard}
          handleclosemodel={() => handleclosemodel()}
        />
      )}
      {cardsarray.length > 0 && (
        <button
          onClick={() => {
            setEditSafe(false);
            setAddnewsafe(true);
          }}
          id="createNewBtn2"
        >
          +<span className="onHoverShowText">Create New Safe</span>
        </button>
      )}
    </div>
  );
};
export default Safes;
