import React from "react";

function AdminLogin() {
  return (
    <>
      <div className="container text-start col-12 col-md-8 col-lg-6 bg-dark text-light p-3 rounded rounded-2 my-4">
        <h5 className="my-3">Admin Login</h5>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
           
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
