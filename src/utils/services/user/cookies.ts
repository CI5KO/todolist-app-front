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

import Cookie from 'js-cookie'

import { type UserLogged } from './types'

export function saveJWT(jwt: string): void {
  Cookie.set('jwt', jwt, { expires: 7 })
}

export function getJWT(): string | undefined {
  return Cookie.get('jwt')
}

export function getJWTDecode(): UserLogged | undefined {
  const jwt = Cookie.get('jwt')
  if (jwt) return JSON.parse(atob(jwt.split('.')[1])) as UserLogged
  return undefined
}

function b64DecodeUnicode(str: string): string {
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(str), (c: string) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
}

export function decodeJWT(jwt: string): UserLogged {
  return JSON.parse(b64DecodeUnicode(jwt.split('.')[1])) as UserLogged
}

export function removeJWT(): void {
  Cookie.remove('jwt')
}
