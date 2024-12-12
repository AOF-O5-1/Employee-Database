import { Pool } from 'pg';
import dotenv from 'dotenv'; 
import require from 'pg';


dotenv.config();
const { Client } = require('pg');

const client = new Client({
  user: 'user',
  password: 'wanderlust25',
  host: 'localhost',
  database: 'Employee_Tracker',
  port: 5432,
});

export default client;
try {
  client.connect();
  client.then(() => console.log('Connected to the database')).catch((err) => console.error('Connection error', err.stack));
} catch (err) {
  console.error('Connection error', err.stack);
}

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
// Compare this snippet from server/src/index.ts:
// import express from 'express';