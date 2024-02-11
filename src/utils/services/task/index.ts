import { Task } from "./types";
import { IS_MOCK_BACKEND } from "../const";

class TaskView {
  public static async get(id: string) {
    return { id, title: "Task" };
  }

  public static async getAll() {
    return [{ id: "1", title: "Task" }];
  }

  public static async create(task: Task) {
    return task;
  }

  public static async update(task: Task) {
    return task;
  }

  public static async delete(id: string) {
    return id;
  }
}

export default TaskView;
