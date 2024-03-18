export interface User {
  uuid: string
  name: string
  email: string
  password: string
}

export interface UserRegister extends Omit<User, 'uuid'> {}

export interface UserLoginProps extends Omit<User, 'uuid' | 'name'> {}

export interface UserLogged extends Omit<User, 'password'> {
  exp: number
  iat: number
}

export interface LoginResponse {
  jwt: string | undefined
}
