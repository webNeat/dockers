export const syntax = `[service-name]`
export const descr = `Stops and deletes a service and its orphan dependencies`

export async function run([serviceName]: string[]) {
  return `Down ${serviceName}`
}
