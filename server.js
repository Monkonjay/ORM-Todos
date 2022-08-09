const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

// the model
const Todo = require('./model/todo');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// prepends / to every route declared in routes
app.use(routes);


// every time our server restarts, our data will automatically be deleted and tables recreated 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>console.log(`App running on PORT ${PORT}`));
});