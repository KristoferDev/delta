const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
