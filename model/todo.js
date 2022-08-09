const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create book class that inherits a features from the Model class
class Todo extends Model {}

// initializes table for the Book class
// 2 params: object with table structure; table config

Todo.init(
    {
        todo: {
            type: DataTypes.STRING,
        },
        isComplted: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        // which database this table should be created for
       sequelize,
        // creates 2 colums that are automatically managed by the db
        timestamps: true,
        modelName: 'todo',
    }

);

module.exports = Todo;