'use client'

/**
 * Author: CI5KO
 * Creation Date: April 14, 2024
 * Last Modification: April 14, 2024
 *
 * Contact: hector_oliva16k@hotmail.com
 *
 * This code is owned by CI5KO.
 * You are welcome to contribute to the original repository.
 *
 * Any contributions to this repository are subject to the original terms stated herein.
 */

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
