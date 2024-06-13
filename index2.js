import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

//Morgan Middleware
app.use(morgan("tiny"));

app.post("/submit", (req, res) =>{
    res.send("Succes");
});

app.get("/", (req, res) =>{
    res.send("Hello");
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})