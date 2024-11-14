import { Client } from 'pg';

class Database {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'your_username',
      password: 'your_password',
      database: 'your_database_name',
    });
  }

  async connect() {
    await this.client.connect();
    console.log('Connected to database');
  }

  async disconnect() {
    await this.client.end();
    console.log('Disconnected from database');
  }

  query(text: string, params?: any[]) {
    return this.client.query(text, params);
  }
}

export default new Database();