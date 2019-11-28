let requestPost = require('/handleRequest')

test('function defined properly', async()=> {
	expect(requestPost.validateRequest).toBeDefined();
})