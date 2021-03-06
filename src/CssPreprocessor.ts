import * as fs from 'fs'
import { Preprocessor } from './Preprocessor'

export class CssPreprocessor implements Preprocessor {
  private cssRegex = /\.css$/
  private cssTypingRegex = /\.css.d.ts$/

  test(file: string): boolean {
    return this.cssRegex.test(file)
  }

  testTyping(file: string): boolean {
    return this.cssTypingRegex.test(file)
  }

  readSync(file: string): string {
    return fs.readFileSync(file, 'utf-8')
  }

}
