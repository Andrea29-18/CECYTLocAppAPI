import pg from 'pg';

export const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database:'db_Cecytev',
    user:'tu usuari',
    password:'tu contraseña'
});