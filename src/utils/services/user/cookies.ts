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

export function decodeJWT(jwt: string) {
  return JSON.parse(atob(jwt.split('.')[1])) as UserLogged
}

export function removeJWT(): void {
  Cookie.remove('jwt')
}
