const express=require("express")
const { dbConnection } = require("./src/db/db")
const { TestModel } = require("./src/model/TestModel")
const app = express()

app.get("/",(req,res)=>{

    res.json({
        msg : "hello backend"
    })

})

app.get("/add",async (req,res)=>{

   await TestModel.insertMany([{
        "name" : Math.random().toString(),
        "age" : 20
    }])

})

app.get("/getvalue",(req,res)=>{

     TestModel.find().then(val =>{
        res.send(val)
     })

})

app.get("/test",(req,res)=>{

    res.send("merhabadsads")

})


app.listen(3000,()=>{
    dbConnection()
})