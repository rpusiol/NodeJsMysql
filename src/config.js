import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

// export const DB_HOST= process.env.DB_HOST;
// export const DB_USER= process.env.DB_USER;
// export const DB_PASS= process.env.DB_PASS;
// export const DB_PORT= process.env.DB_PORT;
// export const DB_NAME= process.env.DB_NAME;

export const MYSQLHOST= process.env.MYSQLHOST;
export const MYSQLUSER= process.env.MYSQLUSER;
export const MYSQLPASSWORD= process.env.MYSQLPASSWORD;
export const MYSQLPORT= process.env.MYSQLPORT;
export const MYSQLDATABASE= process.env.MYSQLDATABASE;
