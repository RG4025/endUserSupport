import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import { NavLink, useNavigate } from "react-router-dom";

const setUserDetails = createContext();

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [childData, setChildData] = useState({});
  function getEmail(e) {
    setEmail(e.target.value);
  }

  function getPassword(e) {
    setPassword(e.target.value);
  }

  let url = `https://65b10d30d16d31d11bddef84.mockapi.io/Employee/Employee`;

  function handleLogin(e) {
    e.preventDefault();

    axios
      .get(url)
      .then((e) => {
        // console.log(e.data);
        setUserData(e.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Fill the valid details");
      });

    userData.map((res) => {
      if (res.Email === email && res.Password === password) {
        // console.log(res);
        // console.log(res.id);
        setIsLoggedIn(true);
        // setUserDetails = res;
        setChildData(res);
      } else {
      }
    });
  }

  useEffect(() => {}, [userData, childData, isLoggedIn]);

  return (
    <>
      <div className="container text-start col-12 col-md-8   bg-dark text-light p-3 rounded rounded-2 my-4">
        <form
          onSubmit={handleLogin}
          className={isLoggedIn ? "d-none" : "d-block col-lg-6 mx-auto"}
        >
          <div className="text-center">
            <h5 className="my-3">User Login</h5>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={getEmail}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={getPassword}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
            <NavLink to="/Signup">Register Here</NavLink>
          </div>
        </form>

        <div className={isLoggedIn ? "d-block" : "d-none"}>
          <UserProfile value={childData} />
        </div>
      </div>
    </>
  );
}

export default Login;
export { setUserDetails };
