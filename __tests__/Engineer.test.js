const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('create new engineer object', () => {
    let engineer = new Engineer('Shawn', 2 , 'shawnevans.music@gmail.com', 'bluesatyr');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Shawn', 2 , 'shawnevans.music@gmail.com', 'bluesatyr');

    expect(engineer.getRole()).toEqual('Engineer');
});

test("gets engineer's GitHub username", () => {
    const engineer = new Engineer('Shawn', 2 , 'shawnevans.music@gmail.com', 'bluesatyr');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

