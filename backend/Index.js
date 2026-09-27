const express= require('express')
var cors = require('cors')
require("./Connection")
const ProModel=require("./models/product")

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello shalu')
})

app.post("/add",(req,res)=>{
    ProModel(req.body).save()
    res.send("data added")
})

app.get("/view",async(req,res)=>{
    var data=await ProModel.find()
    res.send(data)
})

app.delete("/remove/:id",async(req,res)=>{
    await ProModel.FindByIdAndDelete(req.params.id)
    res.send("data deleted")
})

app.put("/edit/:id",async(req,res)=>{
    await ProModel.FindByIdAndUpdate(req.params.id,req.body)
    res.send("data updated")
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})