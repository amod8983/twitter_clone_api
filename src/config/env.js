import dotenv from "dotenv";

dotenv.config();

if(!process.env.DB_HOST) {
    throw new Error('Required ENV not set');
}

export const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5000,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
}