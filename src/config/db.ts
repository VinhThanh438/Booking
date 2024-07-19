import mongoose from "mongoose";

class connectDB {
    public connect = () => {
        mongoose.connect('mongodb://localhost:27017/'), (error: any) => {
            if (error) console.log(error)
            else console.log('connection successfully!')
        }
    }
}

const connection = new connectDB()

export default connection