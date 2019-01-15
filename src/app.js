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

// Add a secured route
// We are calling the extractToken
app.get('/secure', extractToken, (req, res, next) => {

    // At this stage the token in on the request
    // Verify that the token is valid
    // verify a token symmetric
    jwt.verify(req.token, SECRET, (err, data) => {
        err ?
            res.send("Failed to verify token") :
            res.json(data);
    });
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

/**
 * Middleware for verifying the jwt token 
 * The token is in the following format:
 *    Authorization: Bearer <access_token>
 **/
function extractToken(req, res, next) {
    // Get Authorization header which should be in the following format:
    //
    // Authorization: Bearer <access_token>
    // 
    const bearerHeader = req.headers['authorization'];

    // Check if header was send in the request
    if (typeof bearerHeader !== 'undefined') {
        // Split the "Bearer <token>" value
        const tokens = bearerHeader.split(' ');
        // Save the token on the request 
        req.token = tokens[1];
        // Continue to the next Middleware
        next();
    } else {
        // Set unauthorized status code 
        //
        // 403 Forbidden
        // -------------
        // The client does not have access rights to the content, 
        // i.e. they are unauthorized, so server is rejecting to give 
        // proper response. 
        // Unlike 401, the client's identity is known to the server.
        res.sendStatus(403);
    }
}