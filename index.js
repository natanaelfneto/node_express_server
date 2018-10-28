// express import
const express = require('express');

// expresss app instance
const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: "there"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);