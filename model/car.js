import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
    name:{type: String, required: true} ,
    make: String,
    model: String,
    price: Number
})


export default mongoose.model('car', carSchema)