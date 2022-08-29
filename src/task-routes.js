const express = require('express')
const pool = require("./db-pool");
const {v4: uuidv4} = require('uuid');

const router = express.Router();

router.get('/tasks', async function (req, res) {
    const {rows} = await pool.query("select * from task")
    res.send(rows);
});

router.post('/tasks', async function (req, res) {
    await pool.query({
        text: 'INSERT INTO task(taskid, title, message) VALUES($1, $2, $3)',
        values: [uuidv4(), req.body.title, req.body.message],
    })
    res.send({});
});

router.delete('/tasks/:taskId', async function (req, res) {
    await pool.query(`DELETE
                      FROM task
                      WHERE taskid = '${req.params.taskId}';`)
    res.send({});
});

module.exports = router;

