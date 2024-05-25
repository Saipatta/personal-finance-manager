import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthProvider from "./hooks/AuthProvider";

import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Income from "./components/income/Income";
import Expense from "./components/expense/Expense";
import Budget from "./components/budget/Budget";
import Goals from "./components/goals/Goals";
import Investment from "./components/investment/Investment";
import "./App.css";
import { useAuth } from "./hooks/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const {token} = useAuth();
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="nav">
            {!token && (
              <ul>
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
            {token && (
              <ul>
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/income">
                    Income
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/expense">
                    Expense
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/budget">
                    Budget
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/saving">
                    Savings and Investments
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/goal">
                    Goals
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/saving" element={<Investment />} />
              <Route path="/goal" element={<Goals />} />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
