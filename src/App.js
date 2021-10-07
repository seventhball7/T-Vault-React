import NavBar from "./components/navBar/navBar";
import Safes from "./pages/home/Safes/safes";
import Secret from "./pages/home/secrets/secrestOfsafe";
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
