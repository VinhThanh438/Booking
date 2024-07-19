import express from 'express';
import User from './model/user'
import connection from './config/db';

import ticketRoute from './routes/ticket.route';

const app = express();
connection.connect()

app.use(ticketRoute)

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})