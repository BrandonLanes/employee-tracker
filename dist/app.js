import inquirer from 'inquirer';
import { viewDepartments, addDepartment } from './queries/department';
import { viewRoles, addRole } from './queries/role';
// import { viewEmployees, addEmployee, updateEmployeeRole } from './queries/employee';
async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
            ],
        },
    ]);
    switch (action) {
        case 'View all departments':
            await viewDepartments();
            break;
        case 'View all roles':
            await viewRoles();
            break;
        // case 'View all employees':
        //   await viewEmployees();
        //   break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        // case 'Add an employee':
        //   await addEmployee();
        //   break;
        // case 'Update an employee role':
        //   await updateEmployeeRole();
        //   break;
        case 'Exit':
            process.exit();
    }
    mainMenu();
}
mainMenu();