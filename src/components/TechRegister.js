import React, { useState, useNavigate } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function TechRegister() {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  function getName(e) {
    setName(e.target.value);
  }
  function getPass(e) {
    setPass(e.target.value);
  }

  let url = `https://66163c78b8b8e32ffc7cc5e9.mockapi.io/tech/tech`;

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && pass !== "") {
      axios.post(url, { techName: name, techPass: pass });
      alert("Registered Successfully! You can Login Now");
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
        <div className="text-center">
          <h5 className="my-3">Tech Registration</h5>
        </div>

        <form action="" onSubmit={handleSubmit} id="form">
          <div className="mb-3">
            <label className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Name..."
              required
              onChange={getName}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
             Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
              required
              onChange={getPass}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-info w-full">
              Submit
            </button>
            <Link to="/TechLogin">Tech Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default TechRegister;
