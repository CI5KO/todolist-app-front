'use server'

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
