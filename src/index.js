const app = require("./app");
const mongoose = require("mongoose");
const port = 4000;
const urlMongoDB="mongodb+srv://dbaUser:dbaUser@cluster0.4k13s.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect('mongodb+srv://dbaUser:dbaUser@cluster0.4k13s.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));


app.listen(port, ()=>{
    console.log("Server +++ running at http://localhost:"+port);

});

