import pool from '../db.js';
import { departmentPrompt } from '../prompts.js';

export async function viewDepartments(): Promise<void> {
  try {
    const res = await pool.query('SELECT * FROM department');
    console.table(res.rows);
  } catch (error) {
    console.error('Error viewing departments:', error);
  }
}

export async function addDepartment(): Promise<void> {
  try {
    const department_name = await departmentPrompt();
    await pool.query('INSERT INTO department (department_name) VALUES ($1)', [department_name]);
    console.log(`Department '${department_name}' added successfully.`);
  } catch (error) {
    console.error('Error adding department:', error);
  }
}