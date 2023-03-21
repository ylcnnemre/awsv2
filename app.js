const express=require("express")
const app = express()


app.get("/",(req,res)=>{

    res.json({
        msg : "hello backend"
    })

})

app.listen(3000)