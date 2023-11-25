import express from "express";


const app = express();

const port = 4996;

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})