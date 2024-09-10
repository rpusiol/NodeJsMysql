import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config({path: "./config.env"});

import {MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLPORT, MYSQLDATABASE, MYSQLCONNECT } from './config.js';

export const pool = createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  port: MYSQLPORT,
  database: MYSQLDATABASE,
  mysqlconnect: MYSQLCONNECT,
})

