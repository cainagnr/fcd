const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Full Cycle Dev!!');
});


app.listen(8080, () => {
    console.log('Server node on!')
});