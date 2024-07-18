import express from 'express';
import User from './model/user'
import {connect} from 'mongoose'

const app = express();

app.get('/', async (req, res) => {
    try {
        await connect('mongodb://localhost:27017/')
        const user = new User({
            name: 'Vinh',
            password: "123123"
        })
        await user.save()
        return res.json(user);
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})