import mongoose from "mongoose";


const infoSchema = mongoose.Schema({
    name: String,
    department: String,
    Semester: String
})

export default mongoose.model('info', infoSchema)