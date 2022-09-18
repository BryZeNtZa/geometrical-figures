import express from 'express';

const app = express();
const port = 3000;

/**
 * Security handling: CORS, CSRF
 */
app.use((req, res, next) => {
  // set the CORS policy
  res.header('Access-Control-Allow-Origin', '*');
  // set the CORS headers
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  // set the CORS method headers
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

// Helloworld endpoint
app.get('/', (req, res) => {
  res.send('Hello World !');
});

// Units endpoint 
app.get('/api/units', (req, res) => {
  res.json(["centimeter","decimeter","meter","kilometer"]);
});

/** Error handling */
app.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message
  });
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
