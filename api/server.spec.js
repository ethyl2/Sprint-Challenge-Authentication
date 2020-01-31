const request = require('supertest');
const server = require('./server.js');

describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    });
});

describe('POST /api/auth/register', function() {
    it ('should return status 201 after a successful registration', function() {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/auth/register')
        .send({"username": `dave${randomNum}`,
        "password": "toast",
        })
        .then(res => {
            expect(res.status).toBe(201);
        });
    });
    it ('should return JSON after a successful registration', function() {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/auth/register')
        .send({"username": `amy${randomNum}`,
        "password": "toast",
        })
        .then(res => {
            expect(res.type).toMatch(/json/i);
        });
    });
    it ('should return a token after a successful registration', function() {
        let randomNum = Math.random() * 8000;
        return request(server)
        .post('/api/auth/register')
        .send({"username": `jeff${randomNum}`,
        "password": "lumber",
        })
        .then(res => {
            expect(res.body.token).toBeDefined();
        });
    });      
});
