import "../index.css"
import { useState } from "react"
import { createPost, updatePost, deletePost } from "../helpers/dataBase"

const Body = ({ taskList, setTaskList }) => {
  const [error, setError] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const updatedTaskList = [...taskList]
    const newTask = {
      id: Date.now(),
      task: ev.target.task.value,
      completed: false,
    }

    if (newTask.task === "") {
      setError("Ingrese una tarea por favor")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }

    updatedTaskList.push(newTask)
    setTaskList(updatedTaskList)
    createPost(newTask)
  }

  const handleInputChange = (id) => {
    const updatedListState = taskList.map((updateCompletedTask) =>
      updateCompletedTask.id === id
        ? {
            ...updateCompletedTask,
            completed: !updateCompletedTask.completed,
          }
        : updateCompletedTask
    )

    for (let index = 0; index < updatedListState.length; index++) {
      updatePost(updatedListState[index].id, updatedListState[index])
    }
    setTaskList(updatedListState)
  }

  const handleClickDelete = () => {
    const updatedListDeleteToShow = taskList.filter(
      (objectToShow) => !objectToShow.completed
    )
    const deletedList = taskList.filter(
      (objectToDelete) => objectToDelete.completed
    )

    if (!deletedList.length) {
      setError("No existen tareas completadas a eliminar")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }
    for (let index = 0; index < deletedList.length; index++) {
      deletePost(deletedList[index].id)
    }
    setTaskList(updatedListDeleteToShow)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <input type="text" name="task" autoComplete="off"></input>
          <button type="submit">Añadir</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}

      <form className="list">
        {taskList?.map((completedTask) => (
          <div
            className={`${completedTask.completed && "noText"}`}
            key={completedTask.id}
          >
            <button
              className={`${
                completedTask.completed === false
                  ? "buttonCompletedFalse"
                  : " buttonCompletedTrue"
              }`}
              onClick={() => handleInputChange(completedTask.id)}
              type="button"
            >
              {completedTask.completed === true && "✔"}
            </button>
            {completedTask.task}
            <hr></hr>
          </div>
        ))}
        <button
          className="completedButton"
          type="button"
          onClick={(e) => handleClickDelete(e)}
        >
          Eliminar completados
        </button>
      </form>
    </>
  )
}
export default Body
