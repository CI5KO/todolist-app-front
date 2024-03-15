'use server'

import UserView from '@/utils/services/user'
import { LoginResponse } from '@/utils/services/user/types'

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return UserView.login({ email, password })
}
