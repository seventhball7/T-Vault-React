import React, { useState } from "react";
import Safes from "./Safesfolder/safes";
import Secret from "./secretsfolder/secrestOfsafe";
import "./safe.css";

const SafePage = () => {
  return (
    <section className="section">
      <Safes />
      <Secret />
    </section>
  );
};
export default SafePage;
