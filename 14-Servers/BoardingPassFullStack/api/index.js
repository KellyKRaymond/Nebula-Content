const express = require('express');
const db = require('./queries.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => { response.json({ info: 'Node.js, Express and Postgres API' }) });
app.get('/passengers', db.getBoardingPass);
app.get('passenger', db.getBoardingPass);
app.post('/passengers', db.addPassenger);
app.delete('/passenger/:id', db.deletePassenger);
app.put('/passengers', db.updatePassenger)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})