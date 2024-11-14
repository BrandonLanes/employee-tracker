import pool from '../db';
import { rolePrompt } from '../prompts';

export async function viewRoles(): Promise<void> {
  const res = await pool.query(`
    SELECT roles.id, roles.title, roles.salary, departments.name AS department
    FROM roles
    JOIN departments ON roles.department_id = departments.id
  `);
  console.table(res.rows);
}

export async function addRole(): Promise<void> {
  const { title, salary, departmentId } = await rolePrompt();
  await pool.query(
    'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)',
    [title, salary, departmentId]
  );
  console.log(`Role '${title}' added successfully.`);
}