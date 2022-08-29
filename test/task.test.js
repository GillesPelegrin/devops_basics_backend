const createServer = require('../src/create-server.js')
const request = require('supertest');
const pool = require("../src/db-pool");


describe('Create Get and Delete Task', () => {
    let app;

    beforeAll(async () => {
        let server = await createServer();
        app = server.listen(3001, () => console.log(`Start server successfully on port ${process.env.PORT}`))
    })

    afterAll(() => {
        pool.end().then(() => app.close())
    })


    it('responds with json', (done) => {
        request(app)
            .get('/tasks')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});