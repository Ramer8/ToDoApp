import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import Body from "./components/Body"

function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/tasks`
        const { data } = await axios(url)
        setTaskList(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Body taskList={taskList} setTaskList={setTaskList}></Body>
    </>
  )
}

export default App
