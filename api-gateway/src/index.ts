import dot from "dotenv"
import express from "express"

dot.config({path: "/home/taller4O/api-gateway/src/.env"})

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hola api-gateway')
})

app.listen(port, () => {
  console.log(`Puerto escuchado en: ${port}`)
})