import React, { useState } from "react";
import "./addsafe.css";
import safe from "../../assets/iconsPack/safe-icon.png";

function AddSafe(props) {
  return (
    <div className="popup">
      <form className="form">
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
            className="inputTag"
            type="text"
            placeholder="Enter Name"
          ></input>
          <label>Owner</label>
          <input
            className="inputTag"
            type="text"
            placeholder="Owner's Name"
          ></input>
          <label>Type</label>
          <select className="createSafeSelect">
            <option value="personal" selected>
              Personal
            </option>
            <option value="corporate">Protected</option>
            <option value="shared">Public</option>
          </select>
          <label>Description</label>
          <textarea placeholder="Fill this" rows="6" cols="50"></textarea>
          <p className="bottomP">Add any details about the safe</p>
        </div>
        <div className="buttons">
          <button className="cancelBtn" onClick={() => props.setTrigger(false)}>
            Cancel
          </button>
          <input type="submit" value="+ Create" className="createBtn" />
          {props.children}
        </div>
      </form>
    </div>
  );
}
export default AddSafe;
