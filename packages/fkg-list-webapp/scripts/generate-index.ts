import fs from 'fs'

export const generateIndex = ({
  input,
  output,
  strategy,
  ignores = [],
}: {
  input: string
  output: string
  strategy: (filenames: string[]) => string
  ignores?: string[]
}) => {
  const ignoreSet = new Set(ignores)
  const filenames = fs.readdirSync(input).filter((filename) => !ignoreSet.has(filename))
  const content = strategy(filenames)
  fs.writeFileSync(output, [content, '\n'].join(''))
}
