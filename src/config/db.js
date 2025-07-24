import { Sequelize } from "sequelize";
import { config } from './env.js';

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: 'mysql',
        logging: config.nodeEnv == 'development'
    }
);

export default sequelize;