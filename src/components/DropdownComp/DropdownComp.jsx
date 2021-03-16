import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const DropdownComp = () => {
  // const [value, setValue] = useState("");
  const [video, setVideo] = useState("");
  const handleSelect = (e) => {
    setVideo(e);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setVideo("");
  // }

  return (
    <div className="App container">
      <DropdownButton
        alignRight
        title="Web development video"
        id="dropdown-menu-align-left"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="https://www.youtube.com/embed/cocJx3ZZwOM">
          Lecture 1
        </Dropdown.Item>
        <Dropdown.Item eventKey="https://www.youtube.com/embed/QaXh0rwE3Pg">
          Lecture 2
        </Dropdown.Item>
      </DropdownButton>

      <iframe
        width="560"
        height="315"
        src={video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Webdevelopmt"
      ></iframe>
    </div>
  );
};
export default DropdownComp;
