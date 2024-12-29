const todoService = require("../services/todoService");

//here all controller function not make arrow function otherwise this resolved via lexical scope instead of calling context.
async function getAllTodos(req,resp) {
    const {todoService} = this;
    const response = await todoService.getAll();
    return resp.status(200).send({response});
}

async function createTodo(req,resp) {
    const {todoService} = this;
    const response = await todoService.create(req.body.todoText);
    return resp.status(201).send({response});
}

async function getOne(req,resp) {
    const {todoService} = this;
    const response = await todoService.getOne(req.params.id);
    return resp.status(201).send({response});
}

module.exports = {
    getAllTodos,
    createTodo,
    getOne
}