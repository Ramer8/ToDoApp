import PropTypes from "prop-types"
// import classNames from "classnames"
import "./button.css"
export default function Button({
  children,
  //   addButton,
  //   completedButton,
  //   buttonCompletedFalse,
  //   buttonCompletedTrue,
}) {
  Button.propTypes = {
    // addButton: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  }
  // const classes = classNames("buttonCompletedTrue", {
  //   addButton: addButton,
  // })

  //   const classes = classNames({
  //     addButton,
  //     // completedButton,
  //     // buttonCompletedFalse,
  //     // buttonCompletedTrue,
  //   })
  return (
    <>
      <button className="addButton">{children}</button>
      {/* <button className={classes}>{children}</button> */}
    </>
  )
}
