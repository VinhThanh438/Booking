import { Schema, model } from "mongoose";

interface ITicketDetail {
    ticketName: string,
    userName: string
    bookingTime: any
}

const tdSchema = new Schema<ITicketDetail>({
    ticketName: {type: String, require: true},
    userName: {type: String, require: true, default: 'booked'},
    bookingTime: {type: Date, required: true, default: Date()}
})

const TicketDetail = model<ITicketDetail>('TicketDetail', tdSchema)

export default TicketDetail