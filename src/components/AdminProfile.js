import React, { useState } from "react";
import { addTicket, updateStatus, removeTicket } from "../Slice/Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function AdminProfile() {
  const dispatch = useDispatch();

  const ticket = useSelector((state) => state.tickets);
  const [inputTicket, setInputTicket] = useState("");

  function setInput(e) {
    setInputTicket(e.target.value);
  }

  function handleTicket(e) {
    e.preventDefault();

    if (inputTicket !== "") {
      dispatch(addTicket(inputTicket));
      alert("Success!");
    } else {
      alert("The Ticket Should not be empty!");
    }

    setInputTicket("");
  }

  return (
    <>
      <div className="d-flex justify-content-start align-items-center gap-3">
        <span className="text-dark">
          Welcome : <b>admin</b>{" "}
        </span>
        <span>
          <button className="btn btn-danger btn-sm">
            {" "}
            <Link to="/" className="text-decoration-none text-light">
              Logout
            </Link>
          </button>
        </span>
      </div>
      <section className="container">
        <div className="text-center">
          <span className="fw-bold py-2 text-center my-3">Create Ticket</span>

          <form action="" onSubmit={handleTicket} className="my-3">
            <div className="d-md-flex justify-content-center align-items-center gap-3">
              <input
                type="text"
                className="outline-none border-none p-2"
                placeholder="Write the Ticket!"
                value={inputTicket}
                onChange={setInput}
              />

              <button
                type="submit"
                className="btn btn-primary p-2 my-3 my-md-0"
              >
                Add Ticket
              </button>
            </div>
          </form>
        </div>
        <div className="py-3 text-start mx-auto row row-cols-1 row-cols-md-2 col-12 col-md-8">
          {ticket.map((ticket) => {
            return (
              <div className=" p-3">
                <div className="card">
                  <div className="card-body p-3">
                    <h5 className="card-title">Ticket</h5>
                    <p className="card-text">{ticket.text}</p>
                    {/* <p className="card-text">{ticket.id}</p> */}
                    <div className="d-flex justify-content-start align-items- gap-2">
                      <div>
                        {ticket.status !== false ? (
                          <button className="btn btn-success btn-sm">
                            Resolved
                          </button>
                        ) : (
                          <button
                            className="btn bg-transparent border btn-sm border-danger border-2 fw-bold"
                            title="Make Resolved!"
                            onClick={() => dispatch(updateStatus(ticket.id))}
                          >
                            Resolve Ticket
                          </button>
                        )}
                      </div>
                      <div className="">
                        <button
                          className="btn btn-danger btn-sm p-1"
                          title="Delete the title!"
                          onClick={() => dispatch(removeTicket(ticket.id))}
                        >
                          Delete Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AdminProfile;
