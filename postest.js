import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let userIsAuthorised = false;



//body parse middleware (preprocessing)
app.use(bodyParser.urlencoded({extended: true}))

//custom middleware
function passwordCheck (req, res, next) {
    const password = req.body["password"];
    
    if(password === "farhan"){
        userIsAuthorised = true;
    }
    next();
};

app.use(passwordCheck);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});


//route form submit
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
      //Alternatively res.redirect("/");
    }
  });

app.use(express.static(__dirname + '/public'));


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})