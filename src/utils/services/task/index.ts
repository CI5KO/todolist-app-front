'use client'

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
