import { NextFunction } from "express"
import Ticket from "../model/ticket"

class ticket {
    public getALL = async (req: any, res: any) => {
        try {
            const data = await Ticket.find()
            res.status(200).json({message: 'ok', data})
        } catch (error) {
            console.log(error)
        }
    }

    public addTicket = async (req: any, res: any) => {
        try {
            const {ticketName, price, quantity} = req.body

            const ticketData = new Ticket({ticketName, price, quantity})

            const data = await ticketData.save()
            
            return res.status(200).json({message: 'ok', data})
        } catch (error) {
            return res.status(500).json({message: 'Server Error!'})
        }
    }
}

const ticketController = new ticket()

export {ticketController}