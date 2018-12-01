var mongoose = require('mongoose');
var {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(db=>console.log("exitosa")).catch(err=>console.log(err));  