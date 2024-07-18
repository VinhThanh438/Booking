import mongoose from "mongoose";

const connection:any = async () => {
    return await mongoose.connect('mongodb://localhost:27017/')
}

export default connection