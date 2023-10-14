import PropTypes from "prop-types"
import "./TaskList.css"
// import Button from "../button/Button"

const TaskList = ({ completedTask, handleInputChange }) => {
  TaskList.propTypes = {
    completedTask: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
  }
  return (
    <div
      className={`${completedTask.completed && "no-text"}`}
      key={completedTask.id}
    >
      {/* <Button
        style={`${
          !completedTask.completed
            ? "button-completed-false"
            : "button-completed-true"
        }`}
        onClick={() => handleInputChange(completedTask.id)}
      >
        {completedTask.completed && "✔"}
      </Button> */}

      <button
        onClick={() => handleInputChange(completedTask.id)}
        type="button"
        className={`${
          !completedTask.completed
            ? "button-completed-false"
            : "button-completed-true"
        }`}
      >
        {completedTask.completed && "✔"}
      </button>
      {completedTask.task}

      <hr></hr>
    </div>
  )
}

export default TaskList
