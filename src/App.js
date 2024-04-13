import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import AdminProfile from "./components/AdminProfile";
import TechSupport from "./components/TechSupport";
import TechProfile from "./components/TechProfile";
import TechLogin from "./components/TechLogin";
import TechRegister from "./components/TechRegister";
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
  {
    name: "Tech Support",
    to: "/TechSupport",
  },
];

function App() {
  return (
    <>
      <section className="main">
        <nav className="navbar navbar-expand-lg bg-body-tertiary col-12 col-lg-8 mx-auto my-3 rounded rounded-5">
          <div className="container-fluid d-flex justify-content-around align-items-center gap-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse text-md-center navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {navbarLinks.map((e, index) => {
                  return (
                    <li className="nav-item text-center" key={index}>
                      <NavLink className="nav-link fw-bold " to={e.to}>
                        {e.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-0 mx-0 mx-sm-4">
              <strong>Noitavonne</strong>
              <small>User Support</small>
            </div>
          </div>
        </nav>

        <section className="w-full ">
          <div className="container py-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/AdminProfile" element={<AdminProfile />} />
              <Route path="/TechSupport" element={<TechSupport />} />
              <Route path="/TechLogin" element={<TechLogin />} />
              <Route path="/TechProfile" element={<TechProfile />} />
              <Route path="/TechRegister" element={<TechRegister />} />
            </Routes>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
