import { main } from './main'

;(async () => {
  const res = await main(process.argv.slice(2))
  if (res.status == 'success') return console.log(res.output)
  console.error(res.output)
  process.exit(1)
})()
