
import dotenv from 'dotenv'; 
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

const client = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: 'localhost',
  database: process.env.DB_NAME,
  port: 5432,
});

const connection = async () => {
  try {
    await client.connect();
    console.log('Connected to the database')
  } catch (err: any) {
    console.log('error', err);
    console.error('Connection error', err.stack);
  }
}

connection();
  
/*
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
*/

// Compare this snippet from server/src/index.ts:
// import express from 'express';
export default client;