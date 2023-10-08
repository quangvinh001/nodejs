require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const morgan = require('morgan');
// const cors = require('cors');
// const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 8082;

// Mongo DB Connections
// mongoose.connect(process.env.MONGO_DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(response=>{
//     console.log('MongoDB Connection Succeeded.')
// }).catch(error=>{
//     console.log('Error in DB connection: ' + error)
// });

// Middleware Connections
// app.use(cors())
// app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
// Template Engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
// app.set('views', 'src/resources/views');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
app.get('/', (req, res) => {
    return res.render('home');
});
// Connection
app.listen(PORT, () => {
    console.log('App running in port: http://localhost:' + PORT)
})