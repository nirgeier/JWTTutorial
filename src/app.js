// Import the required modules
const express = require('express');

// Create the minimal express server
const app = express();

// Set route for the requests
app.get('/', (req, res, next) => {
    res.send(`Try not. Do, or do not. There is no try." - Yoda, The Empire Strikes Back`);
});

// Set login route which will be protected 
// with JWT tokens
app.use('/login', (req, res, next) => {
    res.send(`Login ...`);
});
// Listen on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));

// Generate "fake" user for the tutorial
const user = {
    userId: 42,
    firstName: "Nir",
    lastName: "Geier",
    email: "nirgeier@gmail.com"
}
