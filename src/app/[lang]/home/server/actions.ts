'use server'

import { type Task } from '@/utils/services/task/types'

export async function getTasksByUserId(uuid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/task/user-id/${uuid}`
  )
  const tasks: Task[] = await response.json()
  return tasks
}
