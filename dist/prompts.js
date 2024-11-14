import inquirer from 'inquirer';
export async function departmentPrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter department name:' },
    ]);
}
export async function rolePrompt() {
    return inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter role title:' },
        { type: 'input', name: 'salary', message: 'Enter role salary:' },
        { type: 'input', name: 'departmentId', message: 'Enter department ID:' },
    ]);
}
