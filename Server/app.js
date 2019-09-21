const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port , (err) => {
    if (err) return console.log(err);
    console.log(`server is http://localhost:${port}`);
})
