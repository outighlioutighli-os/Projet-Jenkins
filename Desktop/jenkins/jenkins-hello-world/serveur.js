const app = require('./index'); // Import de la logique
const PORT = process.env.PORT || 80800;

app.listen(PORT, () => {
    console.log(`Serveur de la calculatrice démarré sur http://localhost:${PORT}`);
});