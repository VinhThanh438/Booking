import { Router } from "express";
import {ticketController} from "../controller/ticket.controller";
const ticketRoute = Router()

ticketRoute.get('/',ticketController.getALL)
ticketRoute.post('/', ticketController.addTicket)


export default ticketRoute