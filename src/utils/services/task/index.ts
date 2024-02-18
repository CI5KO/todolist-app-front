import { Task } from "./types";
import { IS_MOCK_BACKEND } from "../const";
import TaskMock from "./mock";

class TaskView {
  public static async get(id: string) {
    if (IS_MOCK_BACKEND) return TaskMock.get();
    else return {} as Task[];
  }

  public static async create(task: Task) {
    if (IS_MOCK_BACKEND) return TaskMock.create(task);
    else return task;
  }

  public static async update(task: Task): Promise<Task> {
    if (IS_MOCK_BACKEND) return TaskMock.update(task);
    else return task;
  }

  public static async delete(taskID: string): Promise<void> {
    if (IS_MOCK_BACKEND) return TaskMock.delete(taskID);
  }
}

export default TaskView;
