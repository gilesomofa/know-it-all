const mongoose = require('mongoose');
const config = require('config');
const db = `mongodb+srv://Gilesomofa:${process.env.DB_PASS}@cluster0.ppbob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        //this returns a promise therefore needs to await 
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,

        });
        console.log('mongo db connected...');
    } catch (err){
        console.error(err.message);
        //exits process with failure 
        process.exit(1);

    }

}
module.exports = connectDB;