'use server'

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
