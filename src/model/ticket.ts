import { Schema, model } from "mongoose";

interface ITicket {
    ticketName: string,
    price: number,
    quantity: number,
}

const ticketSchema = new Schema<ITicket>({
    ticketName: {type: String, require: true},
    price: {type: Number, require: true},
    quantity: {type: Number, require: true},
})

const Ticket = model<ITicket>('Ticket', ticketSchema)

const ticket = new Ticket({
    ticketName: 'ticket1',
    price: 100000,
    quantity: 3
})

ticket.save()

export default Ticket