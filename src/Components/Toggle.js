import React from "react";
import { Container } from "react-bootstrap";

const Toggle = ({ setToggle }) => {
  return (
    <Container className="my-4">
      <div className="shadow p-4 bg-white" style={{ borderRadius: "14px" }}>
        <h6 className="display-6">View Toggle</h6>
        <div
          style={{
            background: "lightgrey",
            padding: "8px",
            borderRadius: "15px",
          }}
        >
          <i
            onClick={() => setToggle(false)}
            class="fas fa-columns fa-3x me-1"
            style={{ cursor: "pointer"}}
          ></i>
          <i
            onClick={() => setToggle(true)}
            class="ms-1 fas fa-server fa-3x"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <div
        className="shadow p-4 my-4 bg-white"
        style={{ borderRadius: "14px" }}
      >
        <h6 className="display-6">Have a Feedback?</h6>
        <div
          className="p-4"
          style={{ background: "lightgreen", borderRadius: "15px" }}
        >
          We are listening
        </div>
      </div>
    </Container>
  );
};

export default Toggle;
