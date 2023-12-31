import "./Error.css"
import PropTypes from "prop-types"

const Error = ({ setError, error }) => {
  Error.propTypes = {
    setError: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
  }

  const TIME_SHOW_ERROR = 3000

  setTimeout(() => {
    setError("")
  }, TIME_SHOW_ERROR)

  return (
    <div>
      <p className="error">{error}</p>
    </div>
  )
}

export default Error
