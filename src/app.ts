import express from "express";
import morgan from 'morgan';
import router from './routers'

const app = express()

app.use(morgan('dev'))
app.use(router)

export default app