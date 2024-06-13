import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const port = 3000;
let bandName = ""

const __dirname = dirname(fileURLToPath(import.meta.url));

//body parse middleware (preprocessing)
app.use(bodyParser.urlencoded({extended: true}))

//custom middleware
function logger (req, res, next) {
    console.log(req.body);
    bandName = req.body["name"] + " " + req.body["petName"]
    next();
};

app.use(logger);

//route form submit
app.post("/submit", (req, res) =>{
    res.send(
        `
        <h1>Your Band Name is</h1>
        <p>${bandName}</p>
    `
    );
});

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})