import { createPool } from "mysql2/promise";

export async function conectdb() {
    const connection = await createPool({
        host: 'localhost',
        user: 'admin',
        database: 'nutribd',
        password: 'admin',
        connectionLimit: 10
    });

    return connection;
}
