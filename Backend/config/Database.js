import { Sequelize } from 'sequelize';

const db = new Sequelize('db_vms', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;