const jsonfile = require('jsonfile');
const express = require('express');

const app = express();

// tell your app to use the module
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set up method-override for PUT and DELETE forms
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/', (req, res) =>{
    res.render('homepage');
})




app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));