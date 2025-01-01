const app = require("./app");
const { PORT } = require("./config/serverConfig");

const fastify = require("fastify")({ logger: true });


fastify.register(app);

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log("Server is up at Port:", PORT);
})