const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../main_page.html'));
  });
  app.get('/club_players', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../club_players.html'));
  });
  app.get('/match_schedule', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../match_schedule.html'));
  });
  app.get('/tournament_history', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../tournament_history.html'));
  });
  app.get('/contact_us', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../contact_us.html'));
  });
  app.get('/improve_us', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../improve_us.html'));
  });

const indexRouter = require('./routes/main_page');
const clubPlayersRouter = require('./routes/club_players');
const matchScheduleRouter = require('./routes/match_schedule');
const tournamentHistoryRouter = require('./routes/tournament_history');
const contactUsRouter = require('./routes/contact_us');
const contactUsRouter = require('./routes/improve_us');


const improveUSMiddleware = require('./improve_us');


app.use('/', indexRouter);
app.use('/club_players', clubPlayersRouter);
app.use('/match_schedule', matchScheduleRouter);
app.use('/tournament_history', tournamentHistoryRouter);
app.use('/contact_us', contactUsRouter);
app.use('/improve_us', improveUSMiddleware);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
