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

import UserService from './api'

import type { User, UserLoginProps, LoginResponse, UserRegister } from './types'

class UserView {
  static async getUserById(id: string): Promise<User> {
    return UserService.getUserById(id)
  }

  static async register(user: UserRegister): Promise<User> {
    return UserService.register(user)
  }

  static async login(user: UserLoginProps): Promise<LoginResponse> {
    return UserService.login(user)
  }
}

export default UserView
