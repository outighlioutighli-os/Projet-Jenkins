const app = require('./index');
const port = 8080;
app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}`);
});