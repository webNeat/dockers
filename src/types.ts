export type Command = {
  syntax: string
  descr: string
  run: (args: string[]) => Promise<string>
}
export type Commands = Record<string, Command>
export type CommandsResult = { status: 'success' | 'error'; output: string }
