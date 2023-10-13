import Button from "../button/Button"
import PropTypes from "prop-types"
import "./AddTask.css"

const AddTask = ({ handleSubmit }) => {
  AddTask.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <input type="text" name="task" autoComplete="off"></input>
          <Button>Añadir</Button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
