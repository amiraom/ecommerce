const express= require ('express');
const connection =require ('./config/connectDB');
const app = express ();

const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
const userRouter =require ('./routes/userRoute');
const productRouter =require ('./routes/produitRoute');
const orderRouter = require ('./routes/orderRoute');
const { notFound, errorHandler } = require('./middelware/Errors');
const { config } = require('dotenv');
config();

app.use(express.json());


app.use(cors({ origin:"http://localhost:3004",credentials:true}))


app.use(express.static('public'));

app.use('/api',userRouter)
app.use('/api',productRouter)
app.use('/api',orderRouter)
connection();

app.use(notFound)
app.use(errorHandler)
// app.use(express.static('/public'));
// app.use(express.static(path.join(__dirname, '/public')))





app.listen(port,(err)=>{
err ? console.log(err): console.log(`running server in ${port}`)})




