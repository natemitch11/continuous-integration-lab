const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can create a basic greeting', ()=> {
  expect(getGreeting('Bob')).toBe("Hi Bob");
});