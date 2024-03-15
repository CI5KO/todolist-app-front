'use server'

import UserService from './api'

import type {
  User,
  UserRegister,
  UserLogged,
  UserLoginProps,
  LoginResponse,
} from './types'

class UserView {
  static async getUserById(id: string): Promise<User> {
    return UserService.getUserById(id)
  }

  static async register(user: UserRegister): Promise<UserLogged> {
    return UserService.register(user)
  }

  static async login(user: UserLoginProps): Promise<LoginResponse> {
    return UserService.login(user)
  }
}

export default UserView
