export type Task = {
  uuid?: string
  userId?: string
  title?: string
  description?: string
  status?: number
  priority?: number
}

export interface TaskRegister extends Omit<Task, 'id' | 'uuid'> {}
