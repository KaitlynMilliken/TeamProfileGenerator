const Employee = require('../lib/Employee.js');

test('test for creation of employee', () => {
    let employee = new Employee('Jack', 123, 'spam@spam.com');

    expect(typeof employee.name).toBe("string");
    expect(employee.name.length).toBeGreaterThan(1);
    expect(typeof employee.employeeId).toBe('number');
    expect(employee.email).toContain('@');
});


//test for getName

//test for getID

//test for getEmail

//test for getRole
