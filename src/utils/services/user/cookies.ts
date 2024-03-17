import Cookie from 'js-cookie'

export function saveJWT(jwt: string): void {
  Cookie.set('jwt', jwt, { expires: 7 })
}

export function getJWT(): string | undefined {
  return Cookie.get('jwt')
}

export function removeJWT(): void {
  Cookie.remove('jwt')
}
