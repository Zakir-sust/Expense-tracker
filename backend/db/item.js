import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})

const itemModel = mongoose.model('Item',itemSchema)

export default itemModel
