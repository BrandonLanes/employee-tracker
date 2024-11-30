import inquirer from 'inquirer';

export async function departmentPrompt(): Promise<{ name: string }> {
  return inquirer.prompt([
    { type: 'input', name: 'name', message: 'Enter department name:' },
  ]);
}

export async function rolePrompt(): Promise<{ title: string; salary: number; departmentId: number }> {
  return inquirer.prompt([
    { type: 'input', name: 'title', message: 'Enter role title:' },
    { type: 'input', name: 'salary', message: 'Enter role salary:' },
    { type: 'input', name: 'departmentId', message: 'Enter department ID:' },
  ]);
}

export async function employeePrompt(): Promise<{ first_name: string; last_name: string; role_id: number; manager_id: number }> {
  return inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'Enter first name:' },
    { type: 'input', name: 'last_name', message: 'Enter last name:' },
    { type: 'input', name: 'role_id', message: 'Enter role ID:' },
    { type: 'input', name: 'manager_id', message: 'Enter manager ID:' },
  ]);
}

export async function updateEmployeePrompt(): Promise<{ employee_id: number; role_id: number }> {
  return inquirer.prompt([
    { type: 'input', name: 'employee_id', message: 'Enter employees ID:' },
    { type: 'input', name: 'role_id', message: 'Enter role ID:' },
  ]);
}