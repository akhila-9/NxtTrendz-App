import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./comp/LoginPage/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          {/* <Route path="/Home" Element={<HomePage/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
