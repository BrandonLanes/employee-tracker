import pool from '../db.js';
import { departmentPrompt } from '../prompts.js';
export async function viewDepartments() {
    try {
        const res = await pool.query('SELECT * FROM department');
        console.table(res.rows);
    }
    catch (error) {
        console.error('Error viewing departments:', error);
    }
}
export async function addDepartment() {
    try {
        const { name } = await departmentPrompt();
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Department '${name}' added successfully.`);
    }
    catch (error) {
        console.error('Error adding department:', error);
    }
}
