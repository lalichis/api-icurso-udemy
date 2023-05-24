const app = require("./app");

require('dotenv').config();

const { CONNECTION_STRING } = process.env;


const mongoose = require("mongoose");
const port = 4000;



//mongoose.connect('mongodb+srv://dbaUser:dbaUser@cluster0.4k13s.mongodb.net/?retryWrites=true&w=majority',{
    
mongoose.connect(CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));




app.listen(port, ()=>{
    console.log("Server +++ running at http://localhost:" + port);

});

