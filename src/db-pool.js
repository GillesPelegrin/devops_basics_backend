const {Pool} = require("pg");

const pool = new Pool({
    "host": process.env.DB_HOST | "localhost",
    "port": 5432,
    "user": process.env.DB_USER | "postgres",
    "password": process.env.DB_PASSWORD | "postgres",
    "database": "postgres",
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
})

console.log(process.env.DB_HOST)
console.log(process.env.DB_DB_USERHOST)
console.log(process.env.DB_PASSWORD)

module.exports = pool;
