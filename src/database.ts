import { createPool } from "mysql2/promise";

export async function conectdb() {
    try {
        const connection = await createPool({
            host: 'localhost',
            user: 'admin',
            database: 'nutribd',
            password: 'admin',
            connectionLimit: 10
        });
        console.log(`Database connected`)
        return connection;
    } catch (error) {
        console.log(`ocurrió un error`)
        return error;
    }
   
  
}
