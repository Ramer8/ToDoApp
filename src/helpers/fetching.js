import axios from "axios"

export function createPost(newTask) {
  const baseURL = `http://localhost:3000/tasks`
  axios.post(baseURL, newTask).then(() => {})
}

export function updatePost(id, obj) {
  const baseURL = `http://localhost:3000/tasks/${id}`
  axios.put(baseURL, obj).then(() => {})
}

export function deletePost(id) {
  const baseURL = `http://localhost:3000/tasks/${id}`
  axios.delete(baseURL).then(() => {})
}
