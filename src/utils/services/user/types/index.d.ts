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
