import PropTypes from "prop-types"
import "./TaskList.css"

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
      <button
        onClick={() => handleInputChange(completedTask.id)}
        type="button"
        className={`${
          completedTask.completed === false
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
