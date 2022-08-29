const {Pool} = require("pg");

const pool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "postgres",
    "database": "postgres",
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
})

module.exports = pool;
