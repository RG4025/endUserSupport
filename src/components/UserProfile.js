import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  addTicket,
  updateStatus,
  removeTicket,
  answerTicket,
} from "../Slice/Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function UserProfile({ value }) {
  //   const getUserDetails = useContext(setUserDetails);
  // console.log(value);

  const showStatus = useRef();
  const dispatch = useDispatch();
  const [inputTicket, setInputTicket] = useState("");
  const [inputAnswerTicket, setanswerTicket] = useState("");

  // const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  function setInput(e) {
    setInputTicket(e.target.value);
  }

  function handleTicket(e) {
    e.preventDefault();

    if (inputTicket !== "") {
      dispatch(addTicket([value.id, inputTicket]));
      //   alert("Success!");
      (function main() {
        showStatus.current.textContent = "Ticket Added Successfully!";
        setTimeout(() => {
          showStatus.current.textContent = " ";
        }, 3000);
      })();
    } else {
      // alert("The Ticket Should not be empty!");
      (function main() {
        showStatus.current.textContent = "The Ticket Should not be empty!";
        setTimeout(() => {
          showStatus.current.textContent = " ";
        }, 3000);
      })();
    }

    setInputTicket("");
  }

  function hangdleAnswerTicket(e) {
    e.preventDefault();
    // preventDefault();
    if (inputAnswerTicket !== "") {
      dispatch(answerTicket(inputAnswerTicket));
      console.log("success");
    } else {
      
    // alert("fill the valid field!");
      console.log("error");
    }
  }

  const filteredTickets = useSelector((state) => state.tickets);
  // console.log(ticket);

  const ticket = filteredTickets.filter((tic) => tic.userId === value.id);
  // console.log(ticket);

  return (
    <section className="">
      <div className="bg-dark p-3 rounded rounded-5">
        <div className=" col-12 ">
          <div className="d-flex justify-content-around align-items-center">
            <div className="my-4">
              <div>
                <p>Welcome : {value.Email !== null ? value.Email : ""}</p>
              </div>
            </div>
            <div className="">
              <button className="btn btn-danger btn-sm">
                {" "}
                <Link to="/" className="text-light text-decoration-none ">
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <span className="fw-bold py-2 text-center my-3">Create Ticket</span>

          <form action="" onSubmit={handleTicket} className="my-3 w-100">
            <div className="d-flex  flex-column justify-content-center align-items-center gap-3">
              <input
                type="text"
                className="outline-none w-100 border-none p-2"
                placeholder="Write the Ticket!"
                value={inputTicket}
                onChange={setInput}
              />
              <button
                type="submit"
                className="btn btn-success w-50 p-2 my-3 my-md-0"
              >
                Add Ticket
              </button>
            </div>
            <div
              className="py-0 my-4 border border-info border-2"
              ref={showStatus}
            ></div>
          </form>
        </div>
      </div>
      <div className="py-3 row row-cols-1 row-cols-md-2">
        {ticket.map((ticket) => {
          let tId = ticket.id;
          return (
            <div className=" py-3" key={ticket.id}>
              <div className="card border border-secondary border-2">
                <div className="card-body">
                  <h5 className="card-title border border-danger border-2 rounded-2 d-inline-block p-1">
                    Ticket
                  </h5>
                  <p className="card-text">
                    {" "}
                    <b>Your Query :</b> {ticket.text}
                  </p>
                  {ticket.answer !== "" ? (
                    <div className="">
                      <p>
                        <b>Answer :</b> {ticket.answer}
                      </p>
                    </div>
                  ) : (
                    <div className="my-2">
                      <b>The tech support will answer you Shortly!</b>
                    </div>
                  )}

                  {/* <div
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
                            }
                          }}
                        >
                          Add
                        </button>
                      </form>
                    </div> */}

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

                    {/* {ticket.answer ? (
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
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default UserProfile;