import React, { useEffect, useState } from "react";
import "./secretOfsafe.css";
import addfolder from "../../../assets/iconsPack/add-folder.png";
import Safes from "../Safesfolder/safes";
import Addsecret from "../../../components/addSecret/addsecret";
import { useSelector } from "react-redux";
import folderIcon from "../../../assets/iconsPack/add-folder.png";
const Secret = (props) => {
  console.log(props, "props in secret");
  const secretArray = useSelector((state) => state?.secret);
  const [Addnewsecret, setAddnewsecret] = useState(false);
  const handleclosemodel = () => {
    setAddnewsecret(false);
  };
  // const [secretdataArray, setsecretDatArray] = useState();
  // useEffect(() => {
  //   setsecretDatArray(secretdataArray);
  // }, [secretdataArray]);

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
          </div>
          <div className="addf">
            <span className="addfolder">Add Folder</span>

            <div>
              {Addnewsecret && (
                <Addsecret handleclosemodel={() => handleclosemodel()} />
              )}
              <button
                onClick={() => {
                  setAddnewsecret(true);
                  <img className="addicon" src={addfolder} alt="+"></img>;
                }}
              ></button>
            </div>
          </div>
        </div>
        <div className="secretcontent">
          {console.log(secretArray, "secretArray")}
          {secretArray && (
            <div className="secretFolderItem">
              {secretArray.map((itemvalue) => {
                return (
                  <div className="eachFolder">
                    <span className="dropdownFolderItem"></span>
                    <img src={folderIcon} alt="folderIcon"></img>
                    <span className="newFolder">
                      {" "}
                      {itemvalue} <span className="newlyAdded">New</span>
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Secret;
