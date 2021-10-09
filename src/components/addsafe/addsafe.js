import React, { useState } from "react";
import "./addsafe.css";
import safe from "../../assets/iconsPack/safe-icon.png";
import { useDispatch } from "react-redux";
import { addActionevent } from "../../Redux/Actions/action";

function AddSafe(props) {
  console.log(props, "props in addsafe.js");
  const { handleclosemodel } = props;

  const [safeName, setsafeName] = useState("");
  const [owner, setownerName] = useState("");
  const [Description, setDescription] = useState("");
  const [Catagory, setCatagory] = useState("personal");

  const dispatch = useDispatch();
  const HandleAdd = (e) => {
    e.preventDefault();
    dispatch(
      addActionevent({
        safeName: safeName,
        owner: owner,
        Description: Description,
        Catagory: Catagory,
        id: Math.random(),
      })
    );
    handleclosemodel();
  };

  return (
    <div className="popup">
      <form
        className="form"
        onSubmit={(e) => {
          HandleAdd(e);
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
export default AddSafe;
