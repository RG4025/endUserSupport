import React from "react";
import { Link } from "react-router-dom";
import TechLogin from "./TechLogin";
function TechSupport() {
  const tech = [
    {
      name: "1) Resolve Ticket",
      instruc: {
        1: "Open the specific ticket you want to resolve.",
        2: 'Look for a button or option labeled "Resolve Ticket" or "Close Ticket." Click it.',
        3: "After click you can;t unresolve the ticket.!",
      },
    },
    {
      name: "2) Delete Ticket",
      instruc: {
        1: "Open the specific ticket you want to delete.",
        2: "Look for a clear and prominent option labeled 'Delete Ticket'",
        3: "The ticket will remove after remove",
      },
    },
    {
      name: "3) Add Answer",
      instruc: {
        1: "Open the specific ticket you want to reply to.",
        2: "Click to the 'Answer Ticket'",
        3: "Send your response by filling and clicking to the add button",
      },
    },
  ];

  return (
    <>
      <section className="container">
        <div className="">
          <div className="row row-cols-1 row-cols-md-2">
            {tech.map((res) => {
              return (
                <div
                  key={res.id}
                  className="container col my-3 d-flex justify-content-center align-items-center"
                >
                  <div className="bg-dark p-3 rounded rounded-2 text-light">
                    <p>{res.name}</p>
                    <p className="text-start">
                      <li className="list-unstyled ">
                        {" "}
                        <i class="bi bi-arrow-right-circle ms-2"></i>{" "}
                        {res.instruc[1]}
                      </li>
                      <li className="list-unstyled ">
                        {" "}
                        <i class="bi bi-arrow-right-circle ms-2"></i>{" "}
                        {res.instruc[2]}
                      </li>
                      <li className="list-unstyled ">
                        {" "}
                        <i class="bi bi-arrow-right-circle ms-2"></i>{" "}
                        {res.instruc[3]}
                      </li>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="">
          <button className="btn btn-primary btn-md">
            <Link className="text-light" to="/TechLogin">Login To Tech Support</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default TechSupport;