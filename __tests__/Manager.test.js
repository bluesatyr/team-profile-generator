const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('create new manager object', () => {
    const manager = new Manager('Shawn', 3 , 'shawnevans.music@gmail.com', '24B');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets manager's role", () => {
    const manager = new Manager('Shawn', 3 , 'shawnevans.music@gmail.com', '24B');

    expect(manager.getRole()).toEqual('Manager');
})

test("gets manager's office number", () => {
    const manager = new Manager('Shawn', 3 , 'shawnevans.music@gmail.com', '24B');

    expect(manager.getOffice()).toEqual(expect.anything());
})

