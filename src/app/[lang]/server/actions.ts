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

import UserView from '@/utils/services/user'
import { type LoginResponse, type User } from '@/utils/services/user/types'

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return UserView.login({ email, password })
}

export async function register(
  name: string,
  email: string,
  password: string
): Promise<User> {
  return UserView.register({ name, email, password })
}
