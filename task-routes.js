import * as express from 'express';

const router = express.Router();

router.get('/tasks', async function (req, res) {
    res.send(tasks);
});

router.post('/tasks', async function (req, res) {
    res.send(tasks);
});

router.delete('/tasks', async function (req, res) {
    res.send(tasks);
});

export default router;