require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { Pool } = require("pg");
const router = require("./routes/index");
const path = require('path');
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

const app = express();

const pool = new Pool({
    user: dbUser,
    host: 'localhost',
    database: 'electro',
    password: dbPassword,
    port: 5432,
});


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, 'img')));


app.use((req, res, next) => {
    req.pool = pool;
    next();
});


app.use(router);

module.exports = app;
