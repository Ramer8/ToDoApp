import PropTypes from "prop-types"
import classNames from "classnames"
import "./button.css"
export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  Button.propTypes = {
    checkPassedProps: ({ primary, secondary, success, danger, warning }) => {
      const count =
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!danger) +
        Number(!!warning)
      if (count > 1) {
        return new Error("Only one of p, s, w , s ,d can be true")
      }
    },
  }

  // const classes = classNames("buttonCompletedTrue", {
  //   addButton: primary,
  // })

  const classes = classNames({
    addButton: primary,
    completedButton: secondary,
    buttonCompletedFalse: success,
  })
  return (
    <>
      <button className={classes}>{children}</button>
    </>
  )
}
