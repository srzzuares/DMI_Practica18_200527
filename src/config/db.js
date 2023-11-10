import { Sequelize } from "sequelize"
import 'dotenv/config'

const database = process.env.db;
const username = process.env.user;
const password = process.env.pw;
const host = process.env.ht || process.env.ht1;
const port = process.env.pt;


const dbsequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'mysql',
});

export default dbsequelize;