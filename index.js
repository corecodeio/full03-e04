const express = require('express');
const app = express();
const { server } = require('./src/config/config');

const requestHandler = (req, res, next) => {
  console.log('Request!');
  res.send(`
    <html>
      <head>
        <title>Example Title</title>
      </head>
      <body>
        <h1>Test</h1>
      </body>
    </html>
  `);
  next();
};

const requestHandler2 = (req, res, next) => {
  console.log('requestHandler2');
  next();
};

// middelware
app.use(requestHandler2);
app.use(requestHandler);

app.listen(server.port, () => {
  console.log(`Server running on port: ${server.port}`);
});
