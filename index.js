import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv  from 'dotenv'
const app = express()
const port = 3000


dotenv.config()
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))


dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))