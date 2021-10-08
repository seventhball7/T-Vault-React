import React, { useState, useReducer, useEffect } from "react";
import "../addsafe/addsafe.css";
import safe from "../../assets/iconsPack/safe-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { addActionevent, editEvent } from "../../Redux/Actions/action";

function Editsafe(props) {
  const { handleclosemodel, id } = props;
  const allSafesList = useSelector((state) => state.safe);
  const currentsafe = allSafesList.find((item) => item.id === id);

  const [safeName, setsafeName] = useState(currentsafe.safeName);
  const [owner, setownerName] = useState(currentsafe.owner);
  const [Description, setDescription] = useState(currentsafe.Description);
  const [Catagory, setCatagory] = useState(currentsafe.Catagory);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editEvent({
        safeName: safeName,
        owner: owner,
        Description: Description,
        Catagory: Catagory,
        id: props.id,
      })
    );
    handleclosemodel();
  };

  return (
    <div className="popup">
      <form
        className="form"
        onSubmit={(e) => {
          handleEdit(e, props.index);
        }}
      >
        <h2 className="form-h2">Create Safe</h2>
        <div className="infoDiv">
          <img src={safe} className="shieldImg" alt="safeImage"></img>
          <p className="topP">
            A Safe is a logical unit to store the secrets. All the safes are
            created within Vault. You can control access only at the safe level.
            As a vault administrator you can manage safes but cannot view the
            content of the safe.
          </p>
        </div>
        <div className="SafeInputs">
          <label>Safe Name</label>
          <input
            required="required"
            className="inputTag"
            type="text"
            placeholder="Enter Name"
            value={safeName}
            onChange={(e) => setsafeName(e.target.value)}
          ></input>
          <label>Owner</label>
          <input
            required="required"
            className="inputTag"
            type="text"
            placeholder="Owner's Name"
            value={owner}
            onChange={(e) => setownerName(e.target.value)}
          ></input>
          <label>Type</label>
          <select
            className="createSafeSelect"
            value={Catagory}
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option value="personal" selected>
              Personal
            </option>
            <option value="Protected">Protected</option>
            <option value="Public">Public</option>
          </select>
          <label>Description</label>
          <textarea
            required="required"
            placeholder="Fill this"
            rows="6"
            cols="50"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p className="bottomP">Add any details about the safe</p>
        </div>
        <div className="buttons">
          <button className="cancelBtn" onClick={handleclosemodel}>
            Cancel
          </button>
          <input type="submit" value="+ Create" className="createBtn" />
        </div>
      </form>
    </div>
  );
}
export default Editsafe;
