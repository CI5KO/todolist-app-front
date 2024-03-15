'use server'

import type {
  User,
  UserRegister,
  UserLogged,
  UserLoginProps,
  LoginResponse,
} from '../types'

class UserService {
  static async getUserById(id: string): Promise<User> {
    const response: Response = await fetch(
      `${process.env.BACKEND_URL}/user/${id}`
    )
    const data: User = await response.json()
    return data
  }

  static async register(user: UserRegister): Promise<UserLogged> {
    const response: Response = await fetch(`${process.env.BACKEND_URL}/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })

    const data = await response.json()
    return data
  }

  static async login(user: UserLoginProps): Promise<LoginResponse> {
    const response: Response = await fetch(
      `${process.env.BACKEND_URL}/user/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    )

    const data = await response.json()
    return data
  }
}

export default UserService
