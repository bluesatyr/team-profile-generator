const { TestScheduler } = require("jest");

test('create new employee object', () => {
    const employee = new Employee('Shawn', '1', 'shawnevans.music@gmail.com');

    expect(employee.name).toBe(expect.any(String));

});