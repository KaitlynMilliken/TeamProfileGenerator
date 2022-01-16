const Manager = require("../lib/Manager");

test('testing the creation of new manager', () => {
    let manager = new Manager("Jane", 123, "spam@spam.com", 704-999-9999);

    expect(typeof manager.name).toBe("string");
    expect(typeof manager.employeeId).toBe("number");
    expect(typeof manager.email).toBe("string");
    expect(typeof manager.officeNumber).toBe("number");
});

test('testing the getRole method to return "manager"', ()=> {
    let manager = new Manager("Jane", 123, "spam@spam.com", 704-999-9999);

    expect(manager.getRole()).toBe("Manager");
}); 