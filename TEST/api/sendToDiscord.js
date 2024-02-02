// api/sendToDiscord.js
module.exports = async (req, res) => {
    const fetch = require('node-fetch');
    const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1113916313782472804/lxdu3ZGmBMCnd01tydvib_LmJcxlehYF9jhAh3zvFP54jpfbRKhvlouhzeP2nBmalo62';

    const { username, content } = req.body;

    try {
        const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username || 'GitHub Pages App',
                content: content,
            }),
        });

        if (!discordResponse.ok) {
            throw new Error(`Fehler beim Senden des Webhooks: ${discordResponse.statusText}`);
        }

        res.json({ success: true, message: 'Nachricht erfolgreich an Discord gesendet.' });
    } catch (error) {
        console.error('Fehler beim Senden an Discord:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// sendToDiscord.js
async function sendToDiscord(username, content) {
    const response = await fetch('/api/sendToDiscord', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, content }),
    });

    const data = await response.json();
    console.log(data);
}