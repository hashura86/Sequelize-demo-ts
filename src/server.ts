import express from 'express'
import db from "./config/db"
import morgan from 'morgan'
import pacienteRouter from './routes/router'

db.sync()

const PORT = 8000

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(pacienteRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})
