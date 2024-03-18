export interface User {
  id: string
  uuid: string
  name: string
  email: string
  password: string
}

export interface UserRegister extends Omit<User, 'id' | 'uuid'> {}

export interface UserLoginProps extends Omit<User, 'id' | 'uuid' | 'name'> {}

export interface UserLogged extends Omit<User, 'id' | 'password'> {
  exp: number
  iat: number
}

export interface LoginResponse {
  jwt: string | undefined
}
