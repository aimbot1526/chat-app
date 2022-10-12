const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send(JSON.stringify({ 'some': 'Hello World' }));
});

router.post('/add', (req, res) => {
    const userInfo = req.body;
    if (userInfo.email !== null && userInfo.password !== null) {
        User.findOne({ email: userInfo.email }, (err, data) => {
            if (data != null) {
                res.send('User already exists');
            } else {
                const newPerson = new User({
                    name: userInfo.name,
                    email: userInfo.email,
                    role: 'ROLE_USER',
                    username: userInfo.username,
                    password: userInfo.password
                });
                newPerson.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(userInfo.name);
                    }
                });
            }
        });
    } else {
        res.send("Please enter crendentials properly.");
    }
});

router.get('/check', (req, res) => {
    const userEmail = req.body.email;
    if (userEmail != null) {
        User.findOne({ email: userEmail }, (err, data) => {
            if (data != null) {
                res.send(data);
            } else {
                res.send("No user exists with this email.");
            }
        });
    } else {
        res.send("Please enter valid email");
    }
});

router.delete('/delete', (req, res) => {
    const userEmail = req.body.email;
    if (userEmail != null) {
        User.findOne({ email: userEmail }, (err, data) => {
            if (data != null) {
                User.deleteOne({ email: data.email }, (err, data) => {
                    if (data != null) {
                        res.send("User deleted Successfully");
                    }
                });
            } else {
                res.send("No user exists with this email.");
            }
        });
    } else {
        res.send("Please enter valid email");
    }
});


module.exports = router;