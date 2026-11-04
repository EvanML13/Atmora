// Require Express and dotenv Modules
require('dotenv').config() // Load Enviroment Variables From .env
const express = require('express'); // Web Framework For Node.js

// Create Express Object
const app = express();

// Handle GET Requests
app.get("/", (req, res) => {
    res.send('A simple Node App running on this server')
    res.end()
})

// Port Number 
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
