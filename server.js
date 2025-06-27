const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.render('login'));
app.post('/login', (req, res) => res.redirect('/dashboard'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/campus', (req, res) => res.render('campus'));
app.get('/module', (req, res) => res.render('module', { campusName: req.query.campus || 'Selected' }));
app.get('/admin', (req, res) => res.render('admin'));
app.post('/admin/upload', (req, res) => res.send('Module uploaded!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));