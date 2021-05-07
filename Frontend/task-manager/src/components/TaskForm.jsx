import { useState } from "react";

function TaskForm() {
  return (
    <form id="addTaskForm">
      <input
        id=""
        className="addTaskFormInput"
        type="text"
        placeholder="Task Title"
      />
      <br />
      <input
        id=""
        className="addTaskFormInput"
        type="text"
        placeholder="Task Description"
      />
      <br />
      <button type="button" id="taskSubmitBtn" className="">
        Submit
      </button>
      <br />
      <button type="button" id="taskSubmitBtn" className="">
        Close
      </button>
    </form>
  );
}

export default TaskForm;
