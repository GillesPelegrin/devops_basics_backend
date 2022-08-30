const createServer = require('../src/create-server.js')
const request = require('supertest');
const pool = require("../src/db-pool");


describe('Create Get and Delete Task', () => {
    let app;

    beforeAll(async () => {
        let server = await createServer();
        app = await server.listen(3001, )
        await pool.query('DELETE FROM task')
    })

    afterAll(async () => {
        await pool.end().then(() => app.close())
    })


    it('responds with json', async () => {
        await request(app)
            .post('/tasks')
            .send({title: 'testTitle', message: 'testMessage'})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const tasks = await request(app)
            .get('/tasks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(tasks.body.length).toBe(1)

        const actualTask = tasks.body[0]
        const taskId = actualTask.taskid;
        delete actualTask.taskid
        expect(actualTask).toStrictEqual(
            {
                message: "testMessage",
                title: "testTitle",
            }
        )

        await request(app)
            .delete(`/tasks/${taskId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const deletedTasks = await request(app)
            .get('/tasks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(deletedTasks.body.length).toBe(0)
    });
});