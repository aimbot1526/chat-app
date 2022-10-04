const express = require('express');
const app = express();
const port = 5000;

app.get('/hello', (req, res) => {
    res.send(JSON.stringify({
        'myhope': "Hello From Dashboard"
    }));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});