import NavBar from "./navBar/navBar";
import Safes from "./Safes/safes";
import Secret from "./secrets/secrestOfsafe";
import "./App.css";
function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <Safes />

      <Secret />
    </div>
  );
}

export default App;
