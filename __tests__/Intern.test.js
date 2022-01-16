const Intern = require("../lib/Intern");

test('testing the creation of new intern', () => {
    let intern = new Intern("jackie", 123, "spam@spam.com", "UNCC");

    expect(typeof intern.name).toBe("string");
    expect(typeof intern.employeeId).toBe("number");
    expect(typeof intern.email).toBe("string");
    expect(typeof intern.school).toBe("string");
});

test('testing the getRole method to return "engineer"', ()=> {
    let intern = new Intern("jackie", 123, "spam@spam.com", "UNCC");

    expect(intern.getRole()).toBe("Intern");
}); 