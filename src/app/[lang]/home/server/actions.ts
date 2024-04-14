'use server'

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

import { type Task } from '@/utils/services/task/types'

export async function getTasksByUserId(uuid: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/task/user-id/${uuid}`
  )
  const tasks: Task[] = await response.json()
  return tasks
}
