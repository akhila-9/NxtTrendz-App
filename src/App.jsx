import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./comp/LoginPage/LoginPage";
import HomePage from "./comp/HomePage/HomePage";
import ProtectedRoute from "./comp/ProductedRoute/ProductedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div style={{height:"100%" ,width:"100%"}}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
