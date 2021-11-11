import express from "express";
import morgan from 'morgan';
import router from './controller'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)

export default app