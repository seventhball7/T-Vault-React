import React, { useEffect, useState } from "react";
import "./secretOfsafe.css";
import addfolder from "../../../assets/iconsPack/add-folder.png";
import Safes from "../Safesfolder/safes";
import Addsecret from "../../../components/addSecret/addsecret";
import { useSelector } from "react-redux";
import folderIcon from "../../../assets/iconsPack/add-folder.png";
const Secret = (props) => {
  console.log(props, "props in secret");

  const [flag, setFlag] = useState(props.selectcardID <= 0 ? false : true);
  // const secretArray = useSelector((state) => state.secret);

  const [secretArray, setSecretArray] = useState([]);
  {
    console.log(secretArray, "secretarray");
  }
  const [Addnewsecret, setAddnewsecret] = useState(false);
  const handleclosemodel = () => {
    setAddnewsecret(false);
  };

  useEffect(() => {
    console.log(props.folders, "Props in secret");
    console.log(props.selectcardID, "Selected card in secret");
    console.log(flag, "FLAG");
    if (flag == true) {
      for (let i = 0; i < props.folders.length; i++) {
        const element = props.folders[i];
        if (element.id == props.selectcardID) {
          console.log("hello", element);
          setSecretArray(element.list);
        }
      }
    } else {
      setSecretArray([]);
    }
  });

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
            <div>
              {Addnewsecret && (
                <Addsecret
                  handleclosemodel={() => handleclosemodel()}
                  addSecret={props.addSecret}
                />
              )}
              <div
                className="addsecret"
                onClick={() => {
                  setAddnewsecret(true);
                }}
              >
                <span className="addfolder">Add Folder</span>
                <img className="addicon" src={addfolder} alt="+"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="secretcontent">
          {console.log(secretArray, "secretArray")}

          <div className="secretFolderItem">
            {secretArray.map((item) => {
              return (
                <div className="eachFolder">
                  <span className="dropdownFolderItem"></span>
                  <img src={folderIcon} alt="folderIcon"></img>
                  <span className="newFolder">
                    {" "}
                    {item} <span className="newlyAdded">New</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Secret;
