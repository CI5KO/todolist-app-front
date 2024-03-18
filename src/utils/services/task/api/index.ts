'use client'

import { getJWT } from '../../user/cookies'
import { type Task } from '../types'

class TaskService {
  private static readonly jwt: string | undefined = getJWT()

  static async create(task: Task): Promise<Task> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/task/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.jwt}`,
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
          Authorization: `Bearer ${this.jwt}`,
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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.jwt}`,
        },
      }
    )

    if (response.status !== 204) return false
    return true
  }
}

export default TaskService
