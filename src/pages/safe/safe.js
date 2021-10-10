import React, { useState } from "react";
import Safes from "./Safesfolder/safes";
import Secret from "./secretsfolder/secrestOfsafe";
import "./safe.css";

const SafePage = () => {
  const [selectcardID, setSelectedCardID] = useState();
  const [folders, setFolders] = useState([]);
  const addSafe = (id) => {
    setFolders([
      ...folders,
      {
        id: id,
        list: [],
      },
    ]);
    {
      console.log("addsafeconfirm ", id);
    }
  };
  const addSecret = (folderName) => {
    let tempfolders = [...folders];
    for (let i = 0; i < tempfolders.length; i++) {
      if (tempfolders[i].id == selectcardID) {
        tempfolders[i].list.push(folderName);
        break;
      }
    }
    console.log(tempfolders, "tempfolders");
    setFolders(tempfolders);
  };
  return (
    <section className="section">
      <Safes setselectcardID={setSelectedCardID} addSafe={addSafe} />
      <Secret
        selectcardID={selectcardID}
        addSecret={addSecret}
        folders={folders}
      />
    </section>
  );
};
export default SafePage;
