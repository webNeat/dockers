export const syntax = `[service-name] [command...]`
export const descr = `Runs a command inside a service`

export async function run([serviceName, ...command]: string[]) {
  return `Running "${command.join(' ')}" inside ${serviceName}`
}
