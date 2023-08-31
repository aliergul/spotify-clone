import BottomBar from "components/BottomBar";
import Content from "components/Content";
import SideBar from "components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <BottomBar />
    </Router>
  );
}

export default App;
