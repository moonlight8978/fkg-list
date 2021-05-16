import fs from 'fs'
import path from 'path'

import { Output } from '../types'

const defaultOutputPath = path.join(process.cwd(), 'tmp', 'units-simple.json')

export class JsonOutput<T extends any[]> implements Output<T> {
  constructor(private outputPath = defaultOutputPath) {}

  async execute(units: any[]) {
    fs.writeFileSync(this.outputPath, JSON.stringify(units))
  }
}
