import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_tracker_db',
  password: 'rootroot',
  port: 5432,
});

export default pool;