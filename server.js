const express = require('express');
const cors = require('cors');
const app = express();

//require db connection
const db = require('./config/db');

//allows the use of JSON in the express app
app.use(express.json());
app.use(cors());

// Testing database connection 
db.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

//define api routes
app.use('/api/', require('./routes/routes'));

//Assign port from env if available
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
