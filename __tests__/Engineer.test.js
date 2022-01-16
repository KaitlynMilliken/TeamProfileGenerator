const Engineer = require("../lib/Engineer");

test('testing the creation of new engineer', () => {
    let engineer = new Engineer("Howie", 123, "spam@spam.com", "howieMandell");

    expect(typeof engineer.name).toBe("string");
    expect(typeof engineer.employeeId).toBe("number");
    expect(typeof engineer.email).toBe("string");
    expect(typeof engineer.github).toBe("string");
});

test('testing the getRole method to return "engineer"', ()=> {
    let engineer = new Engineer("Howie", 123, "spam@spam.com", "howieMandell");

    expect(engineer.getRole()).toBe("Engineer");
}); 