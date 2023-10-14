import PropTypes from "prop-types"
import "./button.css"
export default function Button({ children, style, onClick, disabled }) {
  Button.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    onClick: PropTypes.func?.isRequired,
    disabled: PropTypes.func?.isRequired,
  }
  return (
    <>
      <button className={style} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  )
}
