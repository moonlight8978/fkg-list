import fs from 'fs'
import path from 'path'

const defaultOutputPath = path.join(process.cwd(), 'tmp', 'units-simple.json')

export const jsonOutput = (units: any[], outputPath = defaultOutputPath) => {
  fs.writeFileSync(outputPath, JSON.stringify(units))
}
