import { Task } from "./types";
import { IS_MOCK_BACKEND } from "../const";

import TaskMock from "./mock";
import TaskService from "./api";

class TaskView {
  public static async get(id: string) {
    if (IS_MOCK_BACKEND) return TaskMock.get();
    return TaskService.getAll(id);
  }

  public static async create(task: Task) {
    if (IS_MOCK_BACKEND) return TaskMock.create(task);
    return TaskService.create(task);
  }

  public static async update(task: Task): Promise<Task> {
    if (IS_MOCK_BACKEND) return TaskMock.update(task);
    return TaskService.update(task);
  }

  public static async delete(taskID: string): Promise<any> {
    if (IS_MOCK_BACKEND) return TaskMock.delete(taskID);
    return TaskService.delete(taskID);
  }
}

export default TaskView;
