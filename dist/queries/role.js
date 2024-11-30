import pool from '../db.js';
import { rolePrompt } from '../prompts.js';
export async function viewRoles() {
    const res = await pool.query(`
    SELECT role.role_id, role.title, role.salary, department.department_name AS department
    FROM role
    JOIN department ON role.department_id = department.department_id
  `);
    console.table(res.rows);
}
export async function addRole() {
    const { title, salary, departmentId } = await rolePrompt();
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    console.log(`Role '${title}' added successfully.`);
}
