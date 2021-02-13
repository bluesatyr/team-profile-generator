const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('create new manager object', () => {
    let manager = new Manager('Shawn', 3 , 'shawnevans.music@gmail.com', '24B');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});