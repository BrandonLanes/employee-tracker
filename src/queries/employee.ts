import pool from '../db.js';
import { employeePrompt, updateEmployeePrompt } from '../prompts.js';

export async function viewEmployees(): Promise<void> {
  const res = await pool.query(`
    SELECT employee.employee_id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, department.department_name AS department
    FROM employee
    JOIN role ON employee.role_id = role.role_id
    JOIN department ON role.department_id = department.department_id
  `);
  console.table(res.rows);
}

export async function addEmployee(): Promise<void> {
    const { first_name, last_name, role_id, manager_id } = await employeePrompt();
    await pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id]
    );
    console.log(`Employee '${first_name}' '${last_name}' added successfully.`);
  }

  export async function updateEmployee(): Promise<void> {
    const { employee_id, role_id } = await updateEmployeePrompt();
    await pool.query(
        'UPDATE employee SET role_id = $1 WHERE employee_id = $2',
        [role_id, employee_id]
    );
    console.log(`Employee updated!`)
  }