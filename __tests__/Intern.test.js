const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const intern = new Intern('Shawn', 1 , 'shawnevans.music@gmail.com', 'U of T');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern = new Intern('Shawn', 1 , 'shawnevans.music@gmail.com', 'U of T');

    expect(intern.getRole()).toEqual('Intern');
});

test("gets intern's GitHub username", () => {
    const intern = new Intern('Shawn', 1 , 'shawnevans.music@gmail.com', 'U of T');

    expect(intern.getSchool()).toEqual(expect.any(String));
});