import React, { useState, useRef } from "react";
import {
  addTicket,
  updateStatus,
  removeTicket,
  assignTicketByAdmin,
} from "../Slice/Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { combineSlices } from "@reduxjs/toolkit";
function AdminProfile() {
  const dispatch = useDispatch();

  const ticket = useSelector((state) => state.tickets);

  const [totalTech, setTotalTech] = useState([]);
  const [selectTech, setSelectTech] = useState();

  // const showStatus = useRef();
  // const [inputTicket, setInputTicket] = useState("");
  // function setInput(e) {
  //   setInputTicket(e.target.value);
  // }

  // function handleTicket(e) {
  //   e.preventDefault();

  //   if (inputTicket !== "") {
  //     dispatch(addTicket(inputTicket));
  //     //   alert("Success!");
  //     (function main() {
  //       showStatus.current.textContent = "Ticket Added Successfully!";
  //       setTimeout(() => {
  //         showStatus.current.textContent = " ";
  //       }, 3000);
  //     })();
  //   } else {
  //     // alert("The Ticket Should not be empty!");
  //     (function main() {
  //       showStatus.current.textContent = "The Ticket Should not be empty!!";
  //       setTimeout(() => {
  //         showStatus.current.textContent = " ";
  //       }, 3000);
  //     })();
  //   }

  //   setInputTicket("");
  // }

  let url = `https://66163c78b8b8e32ffc7cc5e9.mockapi.io/tech/tech`;

  axios
    .get(url)
    .then((res) => {
      setTotalTech(res.data);
    })
    .catch((err) => {});

  // console.log(totalTech);

  return (
    <>
      <div className=" bg-dark p-2 rounded rounded-2 gap-3 my-3 col-12 col-md-8 mx-auto">
        <div className="d-flex justify-content-around  align-items-center">
          <span className="text-light">
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
        <div className="text-light p-2">
          <p>
            <strong>Note :</strong>{" "}
          </p>
          <ul>
            <li>
              Please try to assign tickets to the tech support, Find the right
              tech support using selection field for the ticket which one to
              assign!
            </li>
            <li>
              You have rights to Delete And Resolve ticket.
            </li>
          </ul>
        </div>
      </div>
      <section className="container">
        {/* <div className="text-center">
          <span className="fw-bold py-2 text-center my-3">Create Ticket</span>

          <form action="" onSubmit={handleTicket} className="my-3">
            <div className="d-md-flex justify-content-center align-items-center gap-3">
              <div className="">
                <input
                  type="text"
                  className="border-secondary border-1 p-2 form-control"
                  placeholder="Write the Ticket!"
                  value={inputTicket}
                  onChange={setInput}
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="btn btn-primary p-2 my-3 my-md-0"
                >
                  Add Ticket
                </button>
              </div>
            </div>
            <div
              className="py-0 my-4 border border-info border-2"
              ref={showStatus}
            ></div>
          </form>
        </div> */}
        <div className="py-3 text-start mx-auto row row-cols-1 row-cols-lg-2">
          {ticket.map((ticket) => {
            return (
              <div className="container col p-3" key={ticket.id}>
                <div className="card border border-secondary border-2">
                  <div className="card-body p-3">
                    <h5 className="card-title">Ticket</h5>
                    <p className="card-text">
                      {" "}
                      <b>User Query : </b> {ticket.text}
                    </p>
                    <p className="card-text">
                      {ticket.answer !== "" ? (
                        <p>
                          <b>Answer :</b> {ticket.answer}
                        </p>
                      ) : ticket.assignTicketByAdmin !== "" ? (
                        <b>The ticket are assigned wait for the answer!!</b>
                      ) : (
                        <b>Assign Ticket to the tech support!</b>
                      )}
                    </p>
                    <div className="d-flex justify-content-start align-items-center my-2 gap-2">
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
                    <div className="my-3">
                      {ticket.assignTicketByAdmin !== "" ? (
                        <div>
                          <button className="btn btn-success btn-sm">
                            Assigned to : <b> {ticket.assignTicketByAdmin}</b>
                          </button>
                        </div>
                      ) : (
                        <div>
                          <span>
                            <b> Select Support Below</b>
                          </span>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (selectTech !== "") {
                                dispatch(
                                  assignTicketByAdmin([ticket.id, selectTech])
                                );
                                console.log("success");
                              } else {
                                console.log("error");
                              }
                            }}
                          >
                            <select
                              name="tech"
                              id=""
                              className="form-control"
                              onChange={(e) => {
                                setSelectTech(e.target.value);
                                console.log(e.target.value);
                              }}
                            >
                              <option value="">Please select :</option>
                              {totalTech.map((tech) => {
                                return (
                                  <option
                                    className="form-control"
                                    value={tech.techName}
                                  >
                                    {tech.techName}
                                  </option>
                                );
                              })}
                            </select>

                            <button
                              type="submit"
                              className="btn btn-primary btn-sm my-2"
                            >
                              Assign
                            </button>
                          </form>
                        </div>
                      )}
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
