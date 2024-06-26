import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  addTicket,
  updateStatus,
  removeTicket,
  answerTicket,
  assignTicketByAdmin,
} from "../Slice/Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function TechProfile({ value }) {
  const dispatch = useDispatch();
  const [inputAnswerTicket, setanswerTicket] = useState("");

  // function setInput(e) {
  //   setInputTicket(e.target.value);
  // }

  // const showStatus = useRef();
  // const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  // const [inputTicket, setInputTicket] = useState("");
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
  //       showStatus.current.textContent = "The Ticket Should not be empty!";
  //       setTimeout(() => {
  //         showStatus.current.textContent = " ";
  //       }, 3000);
  //     })();
  //   }

  //   setInputTicket("");
  // }

  const ticket = useSelector((state) => state.tickets);

  const [isTicHide, setIsTicHide] = useState(false);

  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-around gap-3 align-items-center col-12 col-md-8 mx-auto bg-dark p-2 rounded rounded-3 text-light">
          <div className="">
            {" "}
            <b>Welcome :</b> {value.techName}
          </div>
          <div className="">
            <button className="btn btn-danger btn-sm">
              {" "}
              <Link
                to="/"
                className="text-light text-decoration-none list-unstyled"
              >
                Logout
              </Link>
            </button>
          </div>
          {/* <span>{value.Email !== null ? "i did it" : ""}</span> */}
        </div>

        <div className="my-4 col-12 col-md-6">
          <h5>
            <small className="d-block">You'll be see_</small>
            <b>Assigned Ticket from Admin:</b>
          </h5>
        </div>

        {/* <div className="text-center">
          <span className="fw-bold py-2 text-center my-3">Create Ticket</span>

          <form action="" onSubmit={handleTicket} className="my-3">
            <div className="d-sm-flex justify-content-center align-items-center gap-3">
              <input
                type="text"
                className="outline-none border-none p-2"
                placeholder="Write the Ticket!"
                value={inputTicket}
                onChange={setInput}
              />

              <button
                type="submit"
                className="btn btn-success p-2 my-3 my-md-0"
              >
                Add Ticket
              </button>
            </div>
            <div
              className="py-0 my-4 border border-info border-2"
              ref={showStatus}
            ></div>
          </form>
        </div> */}

        <div className="py-3 row row-cols-1 row-cols-md-2">
          {ticket.map((ticket) => {
            let tId = ticket.id;

            if (
              ticket.assignTicketByAdmin === value.techName &&
              ticket.answer === ""
            ) {
              return (
                <div className=" py-3" key={ticket.id}>
                  <div className="card border border-secondary border-2">
                    <div className="card-body">
                      <h5 className="card-title border border-danger border-2 rounded-2 d-inline-block p-1">
                        Ticket
                      </h5>
                      <p className="card-text">{ticket.text}</p>
                      {ticket.answer !== "" ? (
                        <div className="">
                          <p>
                            <b>Answer :</b> {ticket.answer}
                          </p>
                        </div>
                      ) : (
                        <div
                          id={ticket.id}
                          style={{ display: "none" }}
                          className="py-2"
                        >
                          <form
                            // onSubmit={hangdleAnswerTicket}
                            className="d-flex flex-column gap-2"
                          >
                            {" "}
                            <input
                              type="text"
                              className="form-control border border-secondary border-1"
                              placeholder="Write Answer..."
                              onChange={(e) => setanswerTicket(e.target.value)}
                            />{" "}
                            <button
                              type="submit"
                              className="btn btn-secondary btn-sm"
                              onClick={(e) => {
                                e.preventDefault();
                                if (inputAnswerTicket !== "") {
                                  dispatch(
                                    answerTicket([ticket.id, inputAnswerTicket])
                                  );
                                  setanswerTicket("");
                                } else {
                                  alert("Input field should not be empty!");
                                }
                              }}
                            >
                              Add
                            </button>
                          </form>
                        </div>
                      )}

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

                        {ticket.answer ? (
                          ""
                        ) : (
                          <div className="">
                            <button
                              className="btn btn-danger btn-sm p-1"
                              title="Delete the title!"
                              onClick={() => {
                                const currTicket = document.getElementById(tId);

                                // console.log(currTicket.id);
                                if (currTicket.id === ticket.id) {
                                  // setIsAnswerOpen(!isAnswerOpen);

                                  if (currTicket.style.display === "none") {
                                    currTicket.style.display = "block"; // Show element
                                  } else {
                                    currTicket.style.display = "none"; // Hide element
                                  }
                                }
                              }}
                            >
                              Answer Ticket
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // setIsTicHide(true);
            }
          })}

          <div className="d-none">
            <p>{isTicHide !== false && "No ticket assighned!"}</p>
          </div>
        </div>
      </section>

      <div className="border border-2 border-info my-3"></div>

      <section>
        <div>
          <h5>
            <small className="d-block">You'll be see_</small>
            <b>Answered Ticket :</b>
          </h5>
        </div>

        <div>
          <div className="py-3 row row-cols-1 row-cols-md-2">
            {ticket.map((tic) => {
              if (
                tic.answer !== "" &&
                tic.assignTicketByAdmin === value.techName
              ) {
                return (
                  <>
                    <div className=" py-3" key={ticket.id}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-inline-block border border-2 border-danger p-1 rounded rounded-2">
                            Ticket
                          </h5>
                          <p>
                            <b>User Query :</b>
                            {tic.text}
                          </p>
                          <p>
                            <b>Answer : </b>
                            {tic.answer}
                          </p>
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
                                  onClick={() =>
                                    dispatch(updateStatus(ticket.id))
                                  }
                                >
                                  Resolve Ticket
                                </button>
                              )}
                            </div>
                            <div className="">
                              <button
                                className="btn btn-danger btn-sm p-1"
                                title="Delete the title!"
                                onClick={() =>
                                  dispatch(removeTicket(ticket.id))
                                }
                              >
                                Delete Ticket
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechProfile;
