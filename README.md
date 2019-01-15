# JWTTutorial

In this tutorial we will be learnig how to use JWT along with NodeJS + Express application.

### Step01-Create the project skelelton

- Create a folder for the project
- Create a src folder `mkdir src`
- Create the NodeJs project with: `npm init -y`
- Install the required packages
```
npm i nodemon express jsonwebtoken
```
- Create the minimal express server [src/app.js](./src/app.js)
```js
// Import the required modules
const express = require('express');

// Create the minimal express server
const app = express();

// Set route for the requests
app.use('/', (req, res, next) => {
    res.send(`Try not. Do, or do not. There is no try." - Yoda, The Empire Strikes Back`);
});

// Listen on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));
```
- Start the server with `nodemon src/app.js`
- Open http://localhost:3000
