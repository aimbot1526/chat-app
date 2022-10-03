const express = require('express');
const app = express();
const port = 5000;

app.get('/hello', (req, res) => {
    res.send(JSON.stringify({
        'myhope': "New bro World"
    }));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});