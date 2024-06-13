import express from 'express';

const app = express();
const port = 3000;

function logger (req, res, next) {
    console.log("Request method : ", req.method);
    console.log("Request URL : ", req.url);
    next();
};

app.use(logger);

app.get("/submit", (req, res) =>{
    res.send("Succes");
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})