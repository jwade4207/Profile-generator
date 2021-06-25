const Employee = require("../lib/Employee");

test('test create new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test('set name', () => {
    const name = 'Jerod';
    const employee = new Employee(name, "1", "Jerod@1")

    expect(employee.getName()).toBe(name)
});

test('set employee Id', () => {
    const id = '1';
    const employee = new Employee('Jerod', id, "jerod21")

    expect(employee.getId()).toBe(id)
});

test('set Employee email address', () => {
    const email = 'jwade4207@yahoo.com'
    const employee = new Employee('Jerod', "1", email)

    expect(employee.getEmail()).toBe(email)
});

test('To set the employees role in company', () => {
    const position = "new employee"
    const employee = new Employee("jerod", "1", "Jerod@1", position)

    expect(employee.getRole()).toBe(position)
});