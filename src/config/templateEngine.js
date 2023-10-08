const path = require('path');
const { engine } = require('express-handlebars');

const configEngine = (app) => {
    app.engine('.hbs', engine({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    // app.set('views', 'src/resources/views');
    app.set('views', path.join('src', 'resources', 'views'));

};


module.exports = configEngine;