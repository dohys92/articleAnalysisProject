const formHandler = require('/formHandler')

test('properly fetch API', ()=> {
	expect(
		getData('https://api.aylien.com/api/v1/classify?mode=document/url=https://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile/)')["categories"].label
		.toEqual("marketing")
		)
})