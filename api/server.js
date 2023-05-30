const express = require("express");
const router = require("./tarifler/tarifler-router");
const server = express();

server.use(express.json());

server.use("/api/tarifler", router);

module.exports = server;
//
