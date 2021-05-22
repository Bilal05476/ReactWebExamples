import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "./DropdownComp.css";

const DropdownComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState("Course");

  const handleSelect = (e) => {
    setCourse(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
    setCourse("Course");
  };

  return (
    <div className="row mx-3 p-2">
      <div className="col-md-4">
        <form action="POST" onSubmit={handleSubmit} className="form p-4">
          <h4 className="text-light">Register Now Only in $40</h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Enter Name*"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Email*"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            required
            placeholder="Phone*"
          />

          <DropdownButton
            alignLeft
            title={course}
            id="dropdown-menu-align-left"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="html">Html</Dropdown.Item>
            <Dropdown.Item eventKey="css">CSS</Dropdown.Item>
          </DropdownButton>

          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text"
            required
            placeholder="Date*"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="Message"
            id=""
            required
            rows="5"
          ></textarea>
          {name === "" ||
          email === "" ||
          message === "" ||
          phone === "" ||
          date === "" ||
          course === "Course" ? (
            <button className="btn btn-block disabledBtn my-3" disabled>Submit</button>
          ) : (
            <button className="btn btn-block submitBtn my-3">Submit</button>
          )}
        </form>
      </div>
    </div>
  );
};
export default DropdownComp;
