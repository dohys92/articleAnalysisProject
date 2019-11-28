const req = require('supertest')
const index = require('./index.js')

test('GET method works', async()=> {
		const res = await req(index).get('/');
		expect(res.statusCode.toBe(200))
	}