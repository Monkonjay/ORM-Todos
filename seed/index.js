const sequelize = require('../config/connection');
const Todo = require('./../model/todo');

const todos = require('./todos');

const mightySeeder = async () => {
    await sequelize.sync({ force: false});

    await Todo.bulkCreate(todos);
};

(async () => {
    await mightySeeder();
})();