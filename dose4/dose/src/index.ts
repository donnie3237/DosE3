import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
const app = new Hono()


app.use(cors())
app.use(logger());
app.use(prettyJSON());
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/gg',(c)=>{
  return c.json({
    dd:"awfasf",
    dsfg: "esfjes"
  })
})

export default app
