import React from "react";
import "./secretOfsafe.css";
import addfolder from "../../../assets/iconsPack/add-folder.png";
const Secret = () => {
  return (
    <div className="secretroot">
      <div className="backimg">
        <span className="safeheader"> No Safe Created Yet</span>
        <span className="safedef">
          Create a safe to see your secrets, folders and permissions here
        </span>
      </div>
      <div className="insecret">
        <div className="secretoption">
          <div className="secrentnpermission">
            <span className="secret">Secret</span>
            <span className="permission">Permission</span>
          </div>
          <div className="addf">
            <span className="addfolder">Add Folder</span>
            <img className="addicon" src={addfolder} alt="+"></img>
          </div>
        </div>
        <div className="secretcontent"></div>
      </div>
    </div>
  );
};
export default Secret;
