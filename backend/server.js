const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`app listening on ${ PORT }`));




