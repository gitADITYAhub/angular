var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/db",{useNewUrlParser: true,  useUnifiedTopology: true })
.then(success=> console.log("connected"))
.catch(err=>console.log(err))


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});