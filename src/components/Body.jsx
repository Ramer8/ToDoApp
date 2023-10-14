import "../index.css"
import PropTypes from "prop-types"
import { useState } from "react"
import { createPost, updatePost, deletePost } from "../helpers/fetching"
import TaskList from "./TaskList/TaskList"
import AddTask from "./AddTask/AddTask"
import Error from "./Error/Error"
import Button from "./button/Button"

const Body = ({ taskList, setTaskList }) => {
  const [error, setError] = useState("")

  Body.propTypes = {
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired,
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (event.target.task.value === "") {
      setError("Ingrese una tarea por favor")
      return
    }
    const updatedTaskList = [...taskList]
    const newTask = {
      id: Date.now(),
      task: event.target.task.value,
      completed: false,
    }
    updatedTaskList.push(newTask)
    setTaskList(updatedTaskList)
    createPost(newTask)
  }

  const handleInputChange = (id) => {
    const updatedListState = taskList.map((updateCompletedTask) =>
      updateCompletedTask.id === id
        ? { ...updateCompletedTask, completed: !updateCompletedTask.completed }
        : updateCompletedTask
    )
    updatedListState.forEach((task, index) => {
      updatePost(task.id, updatedListState[index])
    })
    setTaskList(updatedListState)
  }
  const handleClickDelete = () => {
    const deletedList = taskList.filter(
      (objectToDelete) => objectToDelete.completed
    )

    const updatedListDeleteToShow = taskList.filter(
      (objectToShow) => !objectToShow.completed
    )
    deletedList.forEach((task) => {
      deletePost(task.id)
    })
    setTaskList(updatedListDeleteToShow)
  }

  return (
    <>
      <AddTask handleSubmit={handleSubmit}></AddTask>
      {error && <Error setError={setError} error={error}></Error>}

      <form className="container">
        <div className="list">
          {taskList?.map((completedTask) => (
            <TaskList
              key={completedTask.id}
              completedTask={completedTask}
              handleInputChange={handleInputChange}
            ></TaskList>
          ))}
          <Button
            style="secondary"
            onClick={(e) => handleClickDelete(e)}
            disabled={
              !taskList.filter((objectToDelete) => objectToDelete.completed)
                .length
            }
          >
            Eliminar completados
          </Button>
        </div>
      </form>
    </>
  )
}
export default Body
