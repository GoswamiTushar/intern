import "./styles.css";
import NavComponent from "../public/components/navbar";
import TopBar from "../public/components/topbar";
import Home from "../public/pages/home";

export default function App() {
  return (
    <div className="App">
      <NavComponent />
      <TopBar />
      <Home />
    </div>
  );
}
