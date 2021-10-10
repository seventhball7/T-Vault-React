import React, { useState } from "react";
import "./addsecret.css";
import { useDispatch, useSelector } from "react-redux";
import { addFolder } from "../../redux/Actions/action";
const Addsecret = (props) => {
  const newSecret = { name: "" };
  const [addsecret, setAddSecret] = useState(newSecret);
  const { handleclosemodel } = props;
  const dispatch = useDispatch();
  const folderAdd = (e) => {
    e.preventDefault();
    props.addSecret(addsecret);
    handleclosemodel();
  };
  return (
    <div className="popup">
      <form
        className="form"
        onSubmit={(e) => {
          folderAdd(e);
        }}
      >
        <h2 className="form-h2">Create folder</h2>
        <div className="SafeInputs">
          <input
            className="inputTag"
            type="text"
            placeholder="Fill this"
            value={addsecret.name}
            onChange={(e) => setAddSecret(e.target.value)}
          ></input>
          <p className="bottomP">Please add a minimum of 10 characters</p>
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
};
export default Addsecret;
