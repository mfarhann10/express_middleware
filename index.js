import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

//body parse middleware (preprocessing)
app.use(bodyParser.urlencoded({extended: true}))

//route form submit
app.post("/submit", (req, res) =>{
    console.log(req.body);
    res.send("Form data received");
});

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})