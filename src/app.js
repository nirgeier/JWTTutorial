// Import the required modules
const express = require('express'),
    jwt = require('jsonwebtoken');

// Create the minimal express server
const app = express();

// Set the secret which will be using
const SECRET = "try to guess ....";

// Set route for the requests
app.get('/', (req, res, next) => {
    res.send(`Try not. Do, or do not. There is no try." - Yoda, The Empire Strikes Back`);
});

// Set login route which will be protected 
// with JWT tokens
app.use('/login', (req, res, next) => {
    // Here we will have a real login

    // The sign method get the payload (data) and a secret key
    // (Synchronous) Returns the JsonWebToken as string
    jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        user: user
    }, SECRET,
        (err, token) => {
            res.json(token);
        }
    );

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
