import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";

import { Routes, Route, NavLink } from "react-router-dom";
const navbarLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Register",
    to: "/Signup",
  },
  {
    name: "Login",
    to: "/Login",
  },
  {
    name: "Admin Login",
    to: "/AdminLogin",
  },
];

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid col-12 col-lg-6">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse text-md-center navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {navbarLinks.map((e, index) => {
                return (
                  <li className="nav-item " key={index}>
                    <NavLink className="nav-link " to={e.to}>
                      {e.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            End User Support
          </div>
        </div>
      </nav>

      <section>
        <div className="container pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
