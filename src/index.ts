import express from 'express';
import connection from './config/db';
import bodyParser from 'body-parser';

import ticketRoute from './routes/ticket.route';

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
connection.connect()

app.use(ticketRoute)

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})