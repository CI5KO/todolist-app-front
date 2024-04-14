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

import type {
  User,
  UserRegister,
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

  static async register(user: UserRegister): Promise<User> {
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
