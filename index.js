const express = require("express");

const server = express();

server.use(express.json());

const recipesRouter = require("./recipes/recipes-router");

server.use("/api/recipes", recipesRouter);

const port = 8000;

server.listen(port, console.log(`Server is running on port ${port}`));
