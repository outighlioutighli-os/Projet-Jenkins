const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Calculatrice !');
});

// Route Addition : Changement de 'resultat' en 'result' pour le test
app.get('/add/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.json({ operation: 'addition', result: a + b });
});

// Route Division : Ajout de la logique demandée par le test
app.get('/divide/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (b === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    res.json({ operation: 'division', result: a / b });
});

module.exports = app;