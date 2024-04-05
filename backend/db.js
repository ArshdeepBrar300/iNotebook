const mongoose = require('mongoose');
const dotenv=require('dotenv')

dotenv.config();
const connectToMongo = ()=>{
    const DB_URI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fniqopk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        mongoose.connect(DB_URI,{useNewUrlParser:true})
        console.log('Database connected successfully');
        
    } catch (error) {
        console.log('Error connecting to database ',error.message);
        
    }
  

}

module.exports = connectToMongo;