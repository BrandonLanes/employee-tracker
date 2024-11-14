import pool from '../db';
import { departmentPrompt } from '../prompts';
export async function viewDepartments() {
    try {
        const res = await pool.query('SELECT * FROM departments');
        console.table(res.rows);
    }
    catch (error) {
        console.error('Error viewing departments:', error);
    }
}
export async function addDepartment() {
    try {
        const { name } = await departmentPrompt();
        await pool.query('INSERT INTO departments (name) VALUES ($1)', [name]);
        console.log(`Department '${name}' added successfully.`);
    }
    catch (error) {
        console.error('Error adding department:', error);
    }
}
