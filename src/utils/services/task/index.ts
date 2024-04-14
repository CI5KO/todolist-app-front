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

import TaskService from './api'
import { type Task } from './types'

class TaskView {
  public static async create(task: Task) {
    return TaskService.create(task)
  }

  public static async update(task: Task): Promise<Task> {
    return TaskService.update(task)
  }

  public static async delete(taskID: string): Promise<any> {
    return TaskService.delete(taskID)
  }
}

export default TaskView
