// import pool from '../db';
// // import { employeePrompt, updateEmployeeRolePrompt } from '../prompts';

// export async function viewEmployees(): Promise<void> {
//   try {
//     const res = await pool.query(`
//       SELECT employees.id, employees.first_name, employees.last_name, roles.title AS job_title,
//              departments.name AS department, roles.salary, 
//              CONCAT(managers.first_name, ' ', managers.last_name) AS manager
//       FROM employees
//       JOIN roles ON employees.role_id = roles.id
//       JOIN departments ON roles.department_id = departments.id
//       LEFT JOIN employees AS managers ON employees.manager_id = managers.id
//     `);
//     console.table(res.rows);
//   } catch (error) {
//     console.error('Error viewing employees:', error);
//   }
// }

// export async function addEmployee(): Promise<void> {
//   try {
//     const { firstName, lastName, roleId, managerId } = await employeePrompt();
//     await pool.query(
//       'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
//       [firstName, lastName, roleId, managerId]
//     );
//     console.log(`Employee '${firstName} ${lastName}' added successfully.`);
//   } catch (error) {
//     console.error('Error adding employee:', error);
//   }
// }

// export async function updateEmployeeRole(): Promise<void> {
//   try {
//     const { employeeId, roleId } = await updateEmployeeRolePrompt();
//     await pool.query('UPDATE employees SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
//     console.log(`Employee role updated successfully.`);
//   } catch (error) {
//     console.error('Error updating employee role:', error);
//   }
// }