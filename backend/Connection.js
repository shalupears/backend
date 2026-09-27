const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://anjanapk1342_db_user:anjana@cluster0.ty5sts4.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connect")
})
.catch((err)=>{
    console.log(err)
})