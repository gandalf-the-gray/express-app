import express from "express";
import { formatDate } from "./utils.js";

const app = express();

app.use((_, _, next) => {
    console.log(`${formatDate(new Date())}: IP: ${req.ip}`);
    next();
})

app.get("/", (req, res) => {
    res.status(200).send(req.ip);
});
