const express = require('express');
// const db = require('./queries.js');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3030;


app.use(bodyParser.json());
app.use(cors()); 

app.get('/', (request, response) => { response.json({ info: 'Node.js, Express and Postgres API'}) })

app.listen(port, () => { console.log(`App running on port ${port}.`) })