const mongoose = require("mongoose");

const DB = "mongodb+srv://jatin:lddas@cluster0.ib8lfc2.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));