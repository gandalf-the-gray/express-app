import express from "express";
import { formatDate } from "./utils.js";

const app = express();

app.use((req, _, next) => {
    console.log(`${formatDate(new Date())} => IP is ${req.ip}`);
    next();
})

app.get("/", (req, res) => {
    res.status(200).send(req.ip);
});

app.listen(3000, (err) => {
    console.log(err ? err : `listening to port ${3000}`);
})
