const app = require('./index'); 
const PORT = process.env.PORT || 8080; // Correction du port à 8080

const server = app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = server; // Export pour que afterAll() puisse le fermer