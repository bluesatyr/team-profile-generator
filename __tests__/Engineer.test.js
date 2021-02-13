const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('create new engineer object', () => {
    let engineer = new Engineer('Shawn', 2 , 'shawnevans.music@gmail.com', 'bluesatyr');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});