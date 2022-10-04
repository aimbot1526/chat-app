const express = require('express');
const app = express();
const port = 5000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const cookieSession = require('cookie-session');

app.get('/hello', (req, res) => {
    res.send(JSON.stringify({
        'myhope': "Hello From Dashboard"
    }));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});