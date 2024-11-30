"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const db_1 = __importDefault(require("./db"));
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        const { action } = yield inquirer_1.default.prompt([
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
                yield viewDepartments();
                break;
            case 'View all roles':
                yield viewRoles();
                break;
            case 'View all employees':
                yield viewEmployees();
                break;
            case 'Add a department':
                yield addDepartment();
                break;
            case 'Add a role':
                yield addRole();
                break;
            case 'Add an employee':
                yield addEmployee();
                break;
            case 'Update an employee role':
                yield updateEmployeeRole();
                break;
            case 'Exit':
                yield db_1.default.end();
                process.exit();
        }
        mainMenu();
    });
}
function viewDepartments() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db_1.default.query('SELECT * FROM departments');
        console.table(res.rows);
    });
}
function viewRoles() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db_1.default.query(`
      SELECT roles.id, roles.title, departments.name AS department, roles.salary
      FROM roles
      JOIN departments ON roles.department_id = departments.id
    `);
        console.table(res.rows);
    });
}
function viewEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield db_1.default.query(`
      SELECT employees.id, employees.first_name, employees.last_name, roles.title AS job_title,
             departments.name AS department, roles.salary, managers.first_name AS manager
      FROM employees
      JOIN roles ON employees.role_id = roles.id
      JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employees AS managers ON employees.manager_id = managers.id
    `);
        console.table(res.rows);
    });
}
function addDepartment() {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = yield inquirer_1.default.prompt([
            { type: 'input', name: 'name', message: 'Enter department name:' },
        ]);
        yield db_1.default.query('INSERT INTO departments (name) VALUES ($1)', [name]);
        console.log(`Added department: ${name}`);
    });
}
function addRole() {
    return __awaiter(this, void 0, void 0, function* () {
        const departments = yield db_1.default.query('SELECT * FROM departments');
        const { title, salary, departmentId } = yield inquirer_1.default.prompt([
            { type: 'input', name: 'title', message: 'Enter role title:' },
            { type: 'input', name: 'salary', message: 'Enter role salary:' },
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select department:',
                choices: departments.rows.map((dept) => ({
                    name: dept.name,
                    value: dept.id,
                })),
            },
        ]);
        yield db_1.default.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
        console.log(`Added role: ${title}`);
    });
}
function addEmployee() {
    return __awaiter(this, void 0, void 0, function* () {
        const roles = yield db_1.default.query('SELECT * FROM roles');
        const employees = yield db_1.default.query('SELECT * FROM employees');
        const { firstName, lastName, roleId, managerId } = yield inquirer_1.default.prompt([
            { type: 'input', name: 'firstName', message: 'Enter first name:' },
            { type: 'input', name: 'lastName', message: 'Enter last name:' },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select role:',
                choices: roles.rows.map((role) => ({ name: role.title, value: role.id })),
            },
            {
                type: 'list',
                name: 'managerId',
                message: 'Select manager:',
                choices: [
                    { name: 'None', value: null },
                    ...employees.rows.map((emp) => ({
                        name: `${emp.first_name} ${emp.last_name}`,
                        value: emp.id,
                    })),
                ],
            },
        ]);
        yield db_1.default.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
        console.log(`Added employee: ${firstName} ${lastName}`);
    });
}
function updateEmployeeRole() {
    return __awaiter(this, void 0, void 0, function* () {
        const employees = yield db_1.default.query('SELECT * FROM employees');
        const roles = yield db_1.default.query('SELECT * FROM roles');
        const { employeeId, roleId } = yield inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select employee to update:',
                choices: employees.rows.map((emp) => ({
                    name: `${emp.first_name} ${emp.last_name}`,
                    value: emp.id,
                })),
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select new role:',
                choices: roles.rows.map((role) => ({ name: role.title, value: role.id })),
            },
        ]);
        yield db_1.default.query('UPDATE employees SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
        console.log('Updated employee role');
    });
}
// Start the application
mainMenu().catch((err) => {
    console.error('An error occurred:', err);
    db_1.default.end();
});
