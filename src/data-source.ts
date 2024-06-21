import { DataSource, DatabaseType } from "typeorm"
import { User } from "./User"

// string literal required for DataSourse type
let db: DatabaseType;
const dbtype = process.env.DB_TYPE;
if (dbtype === 'postgres' || dbtype === 'mysql' || dbtype === 'mariadb') {
    db = dbtype;
} else {
    db = 'postgres';
}

export const myDataSource = new DataSource({
    type: db,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true,
})

export const initDataSource = async () => {
    myDataSource.initialize();
    console.log('Database connected and initialized')
}

initDataSource().catch((error) =>
    console.log('Database connection error:', error)
);
