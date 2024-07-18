import { Schema, model } from "mongoose";

interface IUser {
    name: string,
    password: string
    balance: number,
    create_at: any
}

const userSchema = new Schema<IUser>({
    name: {type: String, require: true},
    password: {type: String, require: true},
    balance: {type: Number, require: true, default: 120000},
    create_at: {type: Date, required: true, default: Date()}
})

const User = model<IUser>('User', userSchema)

export default User