import { Task } from '../types'

class TaskService {
  static async getAll(userId: string): Promise<Task[]> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/task/user-id/${userId}`
    )
    const tasks: Task[] = await response.json()
    return tasks
  }

  static async create(task: Task): Promise<Task> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/task/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      }
    )
    const newTask: Task = await response.json()
    return newTask
  }

  static async update(task: Task): Promise<Task> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/task/${task.uuid}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      }
    )
    const updatedTask: Task = await response.json()
    return updatedTask
  }

  static async delete(id: string): Promise<Boolean> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/task/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (response.status !== 204) return false
    return true
  }
}

export default TaskService
