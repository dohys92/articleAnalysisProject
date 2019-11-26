const nameChecker = require('/nameChecker')

test('properly checks the name', ()=> {
	expect(global.alert).toHaveBeenCalledTimes(1);
})

