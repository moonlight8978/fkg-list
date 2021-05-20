import path from 'path'

import { generateIndex } from './generate-index'

const initializersDir = path.join(__dirname, '..', 'src', 'config', 'initializers')

const strategy = (filenames: string[]) => {
  return filenames
    .map((filename) => {
      const fileBasename = path.basename(filename, path.extname(filename))
      return `import './${fileBasename}'`
    })
    .join('\n')
}

generateIndex({
  input: initializersDir,
  output: path.join(initializersDir, 'index.ts'),
  strategy,
  ignores: ['index.ts'],
})
