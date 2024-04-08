import React, { useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Login from "./Login";
function Signup() { 

  const formRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function getEmail(e) {
    setEmail(e.target.value);
  }
  function getPassword(e) {
    setPassword(e.target.value);
  }

  let url = `https://65b10d30d16d31d11bddef84.mockapi.io/Employee/Employee`;

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      axios.post(url, { "Email": email, "Password": password });
      alert("Registered Successfully!");
      // formRef.reset();
      const reset = document.getElementById("form");
      reset.reset();
    } else {
      alert("Failed to Register!");
    }
  }

  return (
    <>
      <div className="container text-start col-12 col-md-8 col-lg-6 bg-dark text-light p-3 rounded rounded-2 my-4">
        <h5 className="my-3">Please Fill the form for the Registration</h5>
        <form onSubmit={handleSubmit} ref={formRef} id="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              required
              onChange={getEmail}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" required onChange={getPassword} />
          </div>

          <div className="d-flex justify-content-between align-items-center">

          <button type="submit" class="btn btn-primary w-full">
            Submit
          </button>

          <NavLink hrefLang={Login} to={Login}>
           Already have account Login Here!
          </NavLink>

          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
