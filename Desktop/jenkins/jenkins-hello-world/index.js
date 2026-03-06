const express = require('express');
const app = express();

// Middleware pour parser le JSON si besoin
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Calculatrice ! Utilisez /add/5/3 par exemple.');
});

// Route Addition : /add/5/10
app.get('/add/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.json({ operation: 'addition', resultat: a + b });
});

// Route Soustraction : /sub/20/5
app.get('/sub/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.json({ operation: 'soustraction', resultat: a - b });
});

// On exporte l'objet app pour server.js
module.exports = app;