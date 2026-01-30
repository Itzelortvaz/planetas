const express = require('express');
const path = require('path');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'views/pages')));

// Rutas
app.get('/', (req, res) => {
  res.render('pages/planetas');
  console.log('pagina planetas cargada');
});

app.get('/mercurio', (req, res) => {
  res.render('pages/mercurio');
  console.log('pagina mercurio cargada');
});
app.get('/tierra', (req, res) => {
  res.render('pages/tierra');
  console.log('pagina tierra cargada');
});
// Server
app.listen(4000, () => {
  console.log('listening on port 4000');
});