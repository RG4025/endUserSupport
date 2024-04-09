import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminProfile from "./AdminProfile";
function AdminLogin() {
  const navigate = useNavigate();
  const adminName = "admin";
  const adminPass = "pass123";

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function getName(e) {
    setName(e.target.value);
  }
  function getPass(e) {
    setPass(e.target.value);
  }

  function handleAdminLogin(e) {
    e.preventDefault();

    if (name === adminName && pass === adminPass) {
      navigate("/AdminProfile");
    } else {
      alert("fill the valid credentials!");
    }
  }

  return (
    <>
      <div className="container text-start col-12 col-md-8 col-lg-6 bg-dark text-light p-3 rounded rounded-2 my-4">
        <div className="text-center">
          <h5 className="my-3">Admin Login</h5>
        </div>
        <form onSubmit={handleAdminLogin}>
          <div className="mb-3">
            <label className="form-label  mx-auto">
              Admin Name...
            </label>
            <input
              type="text"
              className="form-control rounded-2"
              title="Admin Name..."
              placeholder="Admin Name..."
              onChange={getName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password...</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
              onChange={getPass}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
          {/* <Link to="/AdminProfile">Login</Link> */}
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
