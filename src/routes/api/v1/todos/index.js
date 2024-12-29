const { getAllTodos, createTodo, getOne } = require("../../../../controllers/todoController");

async function todoRouter(fastify,options){
    fastify.get("/",getAllTodos);
    fastify.post("/",createTodo);
    fastify.get("/:id",getOne);
}

module.exports =  todoRouter;