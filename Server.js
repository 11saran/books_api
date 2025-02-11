const express =  require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require("cors");
const router  = require('./Routes/Route');
const errorHandler = require('./Middleware/errorHandler')
const swaggerDocs = require("./swagger");

const app = express();


//Middleware
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app);
    
})



app.use('/api',router);

app.use(errorHandler);