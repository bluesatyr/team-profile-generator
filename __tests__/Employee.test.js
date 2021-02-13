const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('create new employee object', () => {
    let employee = new Employee('Shawn', 1 , 'shawnevans.music@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});