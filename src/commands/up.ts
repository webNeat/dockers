export const syntax = `[service-name]`
export const descr = `Starts a service with its dependencies`

export async function run([serviceName]: string[]) {
  return `Up ${serviceName}`
}
