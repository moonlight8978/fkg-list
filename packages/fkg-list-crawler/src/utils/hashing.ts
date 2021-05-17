import crypto from 'crypto'

export const hashing = {
  md5(data: string) {
    const hash = crypto.createHash('md5')
    return hash.update(data).digest('hex')
  },
}
