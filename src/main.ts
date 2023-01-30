import * as commands from './commands'
import { runCommands } from './functions'

export async function main(args: string[]) {
  return runCommands(commands, args)
}
