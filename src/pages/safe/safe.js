import React, { useState } from "react";
import Safes from "./Safesfolder/safes";
import Secret from "./secretsfolder/secrestOfsafe";

const SafePage = () => {
  return (
    <section>
      <Safes></Safes>
      <Secret></Secret>
    </section>
  );
};
export default SafePage;
