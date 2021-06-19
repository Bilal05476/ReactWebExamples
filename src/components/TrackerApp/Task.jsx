import React, {useState} from "react";

const Task = ({ task }) => {
  const [value , onChange] = useState(new Date());
  return (
    <div>
      <h1>{task.name}</h1>
    </div>
  );
};

export default Task;
