const fp = require("fastify-plugin");
const apiRouter = require("./routes/api/apiRouter");
const db = require("./db");
const todoRepository = require("./repository/todoRepository");
const todoService = require("./services/todoService");
async function app(fastify, options) {

    /*
    here if first register the todoService first then when hit api then throw error
    because todoService internally register the todoRepository but todoRepository register
    after the todoService so here ordering matter.
    */
    await fastify.register(db);
    await fastify.register(todoRepository);
    await fastify.register(todoService);
    await fastify.register(apiRouter,{prefix: "/api"});
    console.log(fastify.todoService);
}

module.exports = fp(app);