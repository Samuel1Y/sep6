import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: '35.228.156.220',
  database: 'sep6db',
  password: 'database123'
});

export const fetchDataFromDatabase = async (): Promise<any[]> => {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM movies');
    return result.rows;
  } finally {
    client.release();
  }
};

/*const client = new Client({
  user: 'postgres',
  host: '35.228.156.220',
  database: 'sep6db',
  password: 'database123'
});

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await client.end();
    console.log('Disconnected from the database');
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
  }
};

export const fetchDataFromDatabase = async () => {
  try {
    const result = await client.query('SELECT * FROM movies');
    return result.rows;
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return [];
  }
};*/


/*import { query } from './db';

export async function getMovies() {
  const result = await query('SELECT * FROM movies',[]);
  return result.rows;
}
export async function getMovie(movieId: number, answer: string) {
  const result = await query('SELECT * FROM answers WHERE id = $1', [movieId]);
  return result.rows[0].answer === answer;
}*/
