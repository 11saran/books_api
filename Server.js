const express =  require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();


//Middleware
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})