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
      className={`${completedTask.completed && "noText"}`}
      key={completedTask.id}
    >
      {/* <Button
        style={`${
          !completedTask.completed
            ? "buttonCompletedFalse"
            : "buttonCompletedTrue"
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
            ? "buttonCompletedFalse"
            : "buttonCompletedTrue"
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
