import Task from "./Task";
import TasksDB from "./TasksDB";

const TodaysTask = function () {
  return (
    <div id="primaryRow" className="row">
      <div
        id=""
        className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
      >
        <span id="indicator" className="">
          <p id="" className="">
            Previous Tasks
          </p>
        </span>
      </div>
      {TasksDB.map(function TaskCards(cards) {
        return (
          <Task
            key={cards.key}
            taskName={cards.taskName}
            taskDescription={cards.taskDescription}
          />
        );
      })}
    </div>
  );
};

export default TodaysTask;
