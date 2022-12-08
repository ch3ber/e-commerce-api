const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}

app.use(cors(options))

const template = `
Hola mi primer server en express.
<br>
Rutas disponibles en /api/v1/:
<ul>
  <li><a href="/api/v1/products" >/api/v1/products</a></li>
  <li><a href="/api/v1/categories" >/api/v1/categories</a></li>
  <li><a href="/api/v1/users" >/api/v1/users</a></li>
  <li><a href="/api/v1/orders" >/api/v1/orders</a></li>
</ul>
`

app.get('/', (req, res) => {
  res.status(200).send(template)
})

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('App runing on port: ' + port)
})
