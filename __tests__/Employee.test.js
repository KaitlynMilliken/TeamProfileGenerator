const Employee = require('../lib/Employee.js');

test('test for creation of employee', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(typeof employee.name).toBe("string");
    expect(employee.name.length).toBeGreaterThan(1);
    expect(typeof employee.employeeId).toBe('number');
    expect(employee.email).toContain('@');
});


test('test method getName()', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(typeof employee.name).toBe("string");
    expect(employee.getName()).toBe(employee.name);
});


test('test method getId()', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(typeof employee.employeeId).toBe("number");
    expect(employee.getID()).toBe(employee.employeeId);
    expect(employee.getID()).toBeGreaterThan(1);
});

test('test method getName()', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(typeof employee.email).toBe("string");
    expect(employee.getEmail()).toBe(employee.email);
});

test('test method getRole()', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(employee.getRole()).toBe("Employee");
});
