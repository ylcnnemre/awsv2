const mongoose = require("mongoose")

const schema= new mongoose.Schema({

    name : {
         type :String
    },
    age : {
         type : Number
    }
})

const TestModel = mongoose.model("test",schema)

module.exports={
    TestModel
}