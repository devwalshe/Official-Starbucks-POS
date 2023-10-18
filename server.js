const express = require('express');
const app = express();
const PORT = 8000;
const CORS = require('cors');
const path = require('path');

app.use(express.static('public'));
app.use('/PartnerHours', express.static(path.join(__dirname, '/public/PartnerHours')));
app.use('/Menu', express.static(path.join(__dirname, '/public/Menu')));
app.use('/coreDrinks', express.static(path.join(__dirname, '/public/CoreDrinks')));
app.use(express.static('IMG'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(CORS());
app.use(express.urlencoded({ extended: true }));
app.use('/IMG', express.static(path.join(__dirname, '/IMG')));
app.use(express.json());

const APIRoutes = require('./routes/API');
const mainRoutes = require('./routes/main');

app.use('/api', APIRoutes);

// Route for /pos
app.get('/pos', (req, res) => {
  res.sendFile(path.join(__dirname, '/controllers/public/Menu/menu.html'));
});

app.use('/', mainRoutes);

app.listen(process.env.PORT || PORT);