import { Sequelize } from "sequelize";


const db = new Sequelize('apl_tatasurya','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;