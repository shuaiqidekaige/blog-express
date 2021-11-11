import { plainToClass, classToPlain } from 'class-transformer'
import { createHmac } from 'crypto'

export function createSalt(): string {
  const saltLen = 4
  let strs = 'abcdefghijkmlnopqrstuvwxyz'
  strs += strs.toUpperCase()
  strs += '1234567890'
  const strLen = strs.length;
  let salt = ''
  for (let i = 0; i < saltLen; i++) {
    const index = Math.floor(Math.random() * (strs.length - 1) + 1)
    salt += strs[index]
  }

  return salt
}

export function generatorPassword(password: string, salt: string): string {
  const hmac = createHmac('sha256', salt)
  const pwd = hmac.update(password).digest('hex')
  return pwd
}

export function transformResult (instance, Cls) {
  return classToPlain(plainToClass(Cls, instance))
}