import NavBar from "./components/navBar/navBar";
import Safes from "./pages/safe/Safesfolder/safes";
import Secret from "./pages/safe/secretsfolder/secrestOfsafe";
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
