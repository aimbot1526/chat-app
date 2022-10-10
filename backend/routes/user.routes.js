const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send(JSON.stringify({'some': 'Hello World'}));
});

router.post('/auth/add', (req, res) => {
    const userInfo = req.body;
    if (userInfo.email !== null && userInfo.password !== null) {
        User.findOne({email:userInfo.email}, (err, data) => {
            if (data.length != 0) {
                console.log('User already exists');
                res.send('User already exists');
            }
            const newPerson = new User({
                _id: 1,
                name: userInfo.name,
                email: userInfo.email,
                role: 'ROLE_USER',
                username: userInfo.username,
                password: userInfo.password
            });
            newPerson.save((err, data) => {
                if (err) 
                    console.log(err);
                else
                    console.log("Success");
            });
        });
    }
});

module.exports = router;
