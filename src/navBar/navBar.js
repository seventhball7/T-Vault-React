import { React } from "react";
import "./navbar.css";
import logo from "../assets/iconsPack/logo.png";
const NavBar = () => {
  return (
    <header className="mainav">
      <div className="wrapper">
        <div className="logonlink">
          <div className="logo">
            <img src={logo} alt="LOGO" className="logo"></img>
            <h2 className="textbrand">T-Vault</h2>
          </div>
          <div className="link">
            <ul className="linklist">
              <li className="options">Safes</li>
              <li className="options">Valut AppRoles</li>
              <li className="options">Service Accounts</li>
              <li className="options">IAM Service Accounts</li>
              <li className="options">Azure Active Directory</li>
            </ul>
          </div>
        </div>
        <div className="admin">
          <div className="doc">Documentation</div>
          <div className="admin2">(Admin) Davis R.</div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
