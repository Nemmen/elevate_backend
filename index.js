const express = require('express');
const app = express();
const cors = require('cors');
const dbConnnect = require('./database/config');
const router = require('./routes/routes.js');


const port = 6000;

app.use(cors());
app.use(express.json());
dbConnnect();
app.get('/', (req, res) => {
	res.send('Welcome to the server');
});
app.use('/', router);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});