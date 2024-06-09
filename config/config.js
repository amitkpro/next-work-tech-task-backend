const mongoose = require("mongoose");
const url = 'mongodb+srv://iloveug098:EonWYcisXl1v7NQA@test.pkbiqrw.mongodb.net/?retryWrites=true&w=majority&appName=test';

const connection =  ()=>{
 mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log("Database connected !"))
  .catch((err)=>console.error("Database not connected",err));
}

module.exports = connection;
