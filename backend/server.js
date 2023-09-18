// server.js 

//dependencies 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express(); 
const PORT = process.env.PORT || 5000;

// get the routes
const gameRoutes = require('./routes/gameRoutes');
const sentenceRoutes = require('./routes/sentenceRoutes');

app.use(cors());
app.use(express.json());

dotenv.config(); // loading the environment vars 

// mount routes here ---> 
app.use('/home', gameRoutes);
app.use('/sentenceBank', sentenceRoutes);

app.use(function (err, req, res, next) {
  console.error(err); // This should log more details about the error
  res.status(500).json({ error: err.message });
});

// starting the actual react server on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // print this if server runs
});