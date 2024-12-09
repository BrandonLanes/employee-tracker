import inquirer from 'inquirer';
export async function departmentPrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'department_name', message: 'Enter department name:' },
    ]);
}
export async function rolePrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter role title:' },
        { type: 'input', name: 'salary', message: 'Enter role salary:' },
        { type: 'input', name: 'departmentId', message: 'Enter department ID:' },
    ]);
}
export async function employeePrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'Enter first name:' },
        { type: 'input', name: 'last_name', message: 'Enter last name:' },
        { type: 'input', name: 'role_id', message: 'Enter role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter manager ID:' },
    ]);
}
export async function updateEmployeePrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter employees ID:' },
        { type: 'input', name: 'role_id', message: 'Enter role ID:' },
    ]);
}
