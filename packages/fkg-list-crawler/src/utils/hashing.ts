import crypto from 'crypto'

export const checksum = (data: string) => {
  const hash = crypto.createHash('md5')
  return hash.update(data).digest('hex')
}
