const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"APAE California",
            email:"contato_california@email.com",
            whatsapp:"43995885522",
            city: "California",
            uf: "PR"
        });

        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})