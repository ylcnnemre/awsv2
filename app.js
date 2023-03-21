const express=require("express")
const app = express()


app.get("/",(req,res)=>{

    res.json({
        msg : "hello backend"
    })

})

app.get("/test",(req,res)=>{

    res.send("merhabadsads")

})


app.listen(3000)