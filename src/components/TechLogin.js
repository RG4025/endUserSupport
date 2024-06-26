import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TechProfile from "./TechProfile";
import axios from "axios";

function TechLogin() {
  const [techData, setTechData] = useState([]);
  const [istechLoggedin, setIsTechLoggedin] = useState(false);
  const [isUserPresent, setIsUserPresent] = useState(false);
  const [techDataChild, setTechDataChild] = useState({});
  const [tech, setName] = useState("");
  const [pass, setPass] = useState("");

  function getName(e) {
    setName(e.target.value);
  }
  function getPass(e) {
    setPass(e.target.value);
  }

  let url = `https://66163c78b8b8e32ffc7cc5e9.mockapi.io/tech/tech`;

  function handleTechLogin(e) {
    e.preventDefault();
    axios
      .get(url)
      .then((e) => {
        setTechData(e.data);
      })
      .catch((err) => {
        // console.log(err);
        alert("Fill the valid details");
      });

    let techOne = techData.find((e) => {
      if (e.techName === tech && e.techPass === pass) {
        return true;
      }
    });

    if (techOne === undefined) {
      alert("Logging in! OR you must filled the whrong credentials!!.");
    }
  }
  
  useEffect(() => {
    let a = techData.find((e) => {
      if (e.techName === tech && e.techPass === pass) {
        return true;
      }
    });

    console.log(a);

    if (a !== undefined) {
      setIsTechLoggedin(true);
      setTechDataChild(a);
    } else {
      setIsTechLoggedin(false);
      // alert("Please fill the valid credentials!");
    }
  }, [techData, techDataChild, istechLoggedin, isUserPresent]);

  return (
    <>
      <div className={istechLoggedin ? "d-none" : "d-block"}>
        <div className="container text-start col-12 col-md-8 col-lg-6 bg-dark text-light p-3 rounded rounded-2 my-4">
          <div className="text-center">
            <h5 className="my-3">Tech Login</h5>
          </div>
          <form onSubmit={handleTechLogin}>
            <div className="mb-3">
              <label className="form-label  mx-auto">tech Name...</label>
              <input
                type="text"
                className="form-control rounded-2"
                title="tech..."
                placeholder="tech..."
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

            <div className="d-flex justify-content-between align-items-ceter">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
              <NavLink className="text-decoration-none" to="/TechRegister">
                {" "}
                Don't have account Register Here
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <div className={istechLoggedin ? "d-block" : "d-none"}>
        <TechProfile value={techDataChild} />
      </div>
    </>
  );
}

export default TechLogin;
