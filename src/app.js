const express = require('express');
const app = express();
const methodOverride = require('method-override')
const path = require('path');
const noteRouter = require('./routes/note')

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', noteRouter)

app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, function () {
    console.log("Master, el servidor esta corriendo en el puerto 3000")
})