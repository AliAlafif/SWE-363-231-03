const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main_page.html');
});

app.get('/club_players', (req, res) => {
    res.sendFile(__dirname + '/club_players.html');
});

app.get('/match_schedule', (req, res) => {
    res.sendFile(__dirname + '/match_Schedule.html');
});

app.get('/tournament_history', (req, res) => {
    res.sendFile(__dirname + '/tournament_history.html');
});

app.get('/contact_us', (req, res) => {
    res.sendFile(__dirname + '/contact_us.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
