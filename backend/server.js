require('dotenv').config({path:'../config.env'});
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const definitionRouter = require('./routes/definitionRoutes')
// const dbConnection = require('./config');
const db = `mongodb+srv://Gilesomofa:${process.env.DB_PASS}@cluster0.ppbob.mongodb.net/Know-it-all?retryWrites=true&w=majority`;

const connectDB = async () => {
	try {
		//this returns a promise therefore needs to await
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		});
		console.log('mongo db connected...');
	} catch (err) {
		console.error(err.message);
		//exits process with failure
		process.exit(1);
	}
};
console.log(process.env.DB_PASS)
connectDB();
app.use(express.json());
app.use('/', userRouter);
app.use('/definition', definitionRouter)

const PORT = 3000;
app.listen(PORT, () => console.log(`app listening on ${PORT}`));
