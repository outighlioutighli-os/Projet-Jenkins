const express = require('express');
const app = express();
app.get('/add/:a/:b', (req, res) => {
  const result = parseInt(req.params.a) + parseInt(req.params.b);
  res.status(200).json({ result });
});
module.exports = app;