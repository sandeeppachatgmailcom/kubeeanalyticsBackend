const express = require('express')
const router = require('./router/mainRouter')
const  mongoose   = require('./model/mongoose')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors =  require ('cors')
const app = express()


app.use((req,res,next)=>{
  console.log('first',req.path)
  next()
})

const corsOptions = {
  origin:true,
  credentials: true,
  methods: ['GET', 'PATCH', 'PUT', 'POST','DELETE'],
  allowedHeaders: ['Origin','Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-refresh-token', 'x-user-role','x-verify-token'],
  optionsSuccessStatus: 204,
}; 
app.use(express.json());
app.use(cors(corsOptions))
app.use(session({
    secret: 'your-secret-key', 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '-1');
  next();
});



app.use('/',router)

app.listen(4000,()=>{
    console.log('server  listening on 4000')
})