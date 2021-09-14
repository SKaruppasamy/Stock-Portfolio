let express=require('express');

let bodyParser=require('body-parser');

let mongoose=require('mongoose');
let app=express();

let apiRoutes = require("./routes")

app.use(bodyParser.urlencoded({
    extended : true
}));


app.use(bodyParser.json());

const dbPath = 'mongodb://localhost:27017/stock';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db=mongoose.connection;


if (!db)
console.log("Error connecting db");
else
console.log("DB Connected Successfully");

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.use('/api', apiRoutes)


app.listen(port, function() {
    console.log("Running Stock Portfolio on Port "+ port);
});