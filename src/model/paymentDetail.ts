import {Schema, model} from "mongoose";

interface IPaymentDetail {
    ticketName: string,
    userName: string,
    total: number,
    confirmation_time: any
}

const pdSchema = new Schema<IPaymentDetail>({
    ticketName: {type: String, required: true},
    userName: {type: String, required: true},
    total: {type: Number, required: true},
    confirmation_time: {type: Date, required: true, default: Date()}
})

export default pdSchema