import { Commands, CommandsResult } from '../types'

export async function runCommands(commands: Commands, args: string[]): Promise<CommandsResult> {
  const res: CommandsResult = { status: 'success', output: '' }
  const name = args.shift()
  if (!name || !commands[name]) {
    res.output = getHelpMessage(commands)
  } else {
    try {
      res.output = await commands[name].run(args)
    } catch (details) {
      res.status = 'error'
      res.output = `Error while running command '${name}' with arguments ${JSON.stringify(args)}\n${details}`
    }
  }
  return res
}

export function getHelpMessage(commands: Commands) {
  const message = []
  message.push(`Commands:`)
  for (const name in commands) {
    const { syntax, descr } = commands[name]
    message.push(`  ${name} ${syntax}`)
    message.push(`    ${descr}`)
  }
  return message.join(`\n`)
}
