import "../index.css"
import PropTypes from "prop-types"
import { useState } from "react"
import { createPost, updatePost, deletePost } from "../helpers/fetching"
import TaskList from "./TaskList/TaskList"
import AddTask from "./AddTask/AddTask"
import Error from "./Error/Error"

///Me queda: Componetizar
// Arreglar lo de prototype, ✔
// Magic number ✔
//BEM para CSS y al componetizar hacer archivos CSS por cada componente
// Magic number ✔

const Body = ({ taskList, setTaskList }) => {
  const [error, setError] = useState("")

  Body.propTypes = {
    taskList: PropTypes.array.isRequired,
    setTaskList: PropTypes.func.isRequired,
  }
  // Regla DRY --> Don't repeat yourself

  const handleSubmit = (event) => {
    event.preventDefault()

    // Early return
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
    // forEach, map, filter, find, sort..

    updatedListState.forEach((task, index) => {
      updatePost(task.id, updatedListState[index])
    })

    // Update post solo se llamaria una vez con un arreglo de objetos con las tareas
    // for (let index = 0; index < updatedListState.length; index++) {
    // updatePost(updatedListState[index].id, updatedListState[index])
    // }

    // No encuentro manera de actualizar la db q no sea de a un objeto a la vez ya que es la forma que se hace el put con el id.

    setTaskList(updatedListState)
  }

  const handleClickDelete = () => {
    const deletedList = taskList.filter(
      (objectToDelete) => objectToDelete.completed
    )

    // if (!deletedList.length) {
    //   showError("No existen tareas completadas a eliminar")
    //   return
    // }
    // Early return
    const updatedListDeleteToShow = taskList.filter(
      (objectToShow) => !objectToShow.completed
    )
    deletedList.forEach((task) => {
      deletePost(task.id)
    })
    // Lo mismo que POST
    // deletePost(deletedList) si llamo 3 hace tres llamados a back y no es bueno, seria correcto q mandemos los 3 juntos.
    setTaskList(updatedListDeleteToShow)
  }

  return (
    <>
      <AddTask handleSubmit={handleSubmit}></AddTask>
      {error && <Error setError={setError} error={error}></Error>}

      <form className="list">
        {taskList?.map((completedTask) => (
          <TaskList
            key={completedTask.id}
            completedTask={completedTask}
            handleInputChange={handleInputChange}
          ></TaskList>
        ))}
        {/* <MyButton type="primary" disabled /> */}
        <button
          className="completedButton"
          type="button"
          onClick={(e) => handleClickDelete(e)}
          disabled={
            !taskList.filter((objectToDelete) => objectToDelete.completed)
              .length
          }
        >
          Eliminar completados
        </button>
      </form>
    </>
  )
}
export default Body
