import { Task } from "../types";
import { v4 as uuidv4 } from "uuid";

class TaskMock {
  public static async get(): Promise<Task[]> {
    try {
      const tasks = localStorage.getItem("tasks");
      return JSON.parse(tasks || "[]");
    } catch (error) {
      console.error("Error on localStorage");
      return [];
    }
  }

  public static async create(task: Task): Promise<Task> {
    try {
      task.id = uuidv4();
      const tasks = await this.get();
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return task;
    } catch (error) {
      console.error("Error on localStorage");
      return task;
    }
  }

  public static async update(task: Task): Promise<Task> {
    try {
      let tasks = await this.get();
      tasks = tasks.map((t) => (t.id === task.id ? task : t));
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return task;
    } catch (error) {
      console.error("Error on localStorage");
      return task;
    }
  }

  public static async delete(taskID: string): Promise<void> {
    try {
      let tasks = await this.get();
      tasks = tasks.filter((t) => t.id !== taskID);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error on localStorage");
    }
  }
}

export default TaskMock;
