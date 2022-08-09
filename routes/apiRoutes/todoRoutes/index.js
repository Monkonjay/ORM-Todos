const router = require('express').Router();
const Todo = require('../../../model/todo');


router.get('/', async (req, res) => {
    
    try{
        const todos = await Todo.findAll();
        console.log(todos);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error });
    }
});



router.post('/', async (req, res) => {
    const { todo, isCompleted } = req.body;

    try{
        const newTodo = await Todo.create({
            todo,
            isCompleted,
        });

        console.log(newTodo);
        res.json(newTodo);


    } catch (error) {
        res.status(500).json({ error });
    }

});

router.get('/seed', async (req, res) => {
    const todos = [
        {
            todo: 'walk dog',
            isCompleted: 'true',
        },
        {
            todo: 'buy back options',
            isCompleted: 'true',
        },
        {
            todo: 'pick up trash',
            isCompleted: 'false',
        },
        {
            todo: 'eat breakfast',
            isCompleted: 'false',
        },
    ];

    try{
        const newTodos = await Todo.bulkCreate(todos);
        res.json(newTodos);
        console.log(newTodos);

    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;