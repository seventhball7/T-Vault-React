import React, { useState } from "react";
import Safes from "./Safesfolder/safes";
import Secret from "./secretsfolder/secrestOfsafe";
import "./safe.css";

const SafePage = () => {
  const [selectcardID, setSelectedCardID] = useState();
  return (
    <section className="section">
      <Safes setselectcardID={setSelectedCardID} />
      <Secret selectcardID={setSelectedCardID} />
    </section>
  );
};
export default SafePage;
