import { React } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/iconsPack/logo.png";

function Account() {
  const { account } = useParams();

  return <h3>ID: {account}</h3>;
}

const NavBar = () => {
  return (
    <Router>
      <Switch>
        <header className="mainav">
          <div className="wrapper">
            <div className="logonlink">
              <div className="logo">
                <img src={logo} alt="LOGO" className="logo"></img>
                <h2 className="textbrand">T-Vault</h2>
              </div>
              <div className="link">
                <ul className="linklist">
                  <li className="options">
                    <Link to="/" className="links">
                      Safes
                    </Link>
                  </li>
                  <li className="options">
                    <Link to="/valut" className="links">
                      Valut AppRoles
                    </Link>
                  </li>
                  <li className="options">
                    <Link to="/service" className="links">
                      Service Accounts
                    </Link>
                  </li>
                  <li className="options">
                    <Link to="/service?IAM" className="links">
                      IAM Service Accounts
                    </Link>
                  </li>
                  <li className="options">
                    <Link to="/Azure" className="links">
                      Azure Active Directory
                    </Link>
                  </li>
                </ul>
                <Route path="/:account/">
                  <Account />
                </Route>
              </div>
            </div>
            <div className="admin">
              <div className="doc">Documentation</div>
              <div className="admin2">(Admin) Davis R.</div>
            </div>
          </div>
        </header>
      </Switch>
    </Router>
  );
};
export default NavBar;
