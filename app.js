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
    }]).catch(err =>{
        res.json({
             err : err
        })
    })

})

app.get("/getvalue",(req,res)=>{

     TestModel.find().then(val =>{
        res.send(val)
     }).catch(err =>{
        res.send({
            err : err
        })
     })

})

app.get("/test",(req,res)=>{

    res.send("merhabadsads")

})

app.get("/ses",(req,res)=>{
    res.send("ses 1 2 ")
})

app.listen(3000,()=>{
    dbConnection()
})