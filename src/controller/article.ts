import express from "express";
const router = express.Router()

router.get('/', function (req, res) {
    res.end('1')
})


export default router