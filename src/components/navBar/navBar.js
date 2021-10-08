import { React } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";
import "./navbar.css";
import logo from "../../assets/iconsPack/logo.png";

function Account() {
  const { search } = useLocation();
  const { data } = queryString.parse(search);
  return (
    <>
      <h3>{data}</h3>
    </>
  );
}

const NavBar = () => {
  const data = [
    { link: "/vault", name: "Safes" },
    { link: "/valut?data=Vault AppRoles", name: "Vault AppRoles" },
    { link: "/valut?data=Service Accounts", name: "Service Accounts" },
    { link: "/valut?data=IAM Service Accounts", name: "IAM Service Accounts" },
    {
      link: "/valut?data=Azure Active Directory",
      name: "Azure Active Directory",
    },
  ];

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
                  {data.map((item) => (
                    <li className="options" key={item.name}>
                      <Link to={item.link} className="links">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Route path="/">
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
