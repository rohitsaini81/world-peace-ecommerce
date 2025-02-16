import pkg from 'pg';
const { Pool } = pkg;
// PostgreSQL connection configuration
const DBpool = new Pool({
    user: 'rohitsaini',
    host: 'localhost',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432,             // Default PostgreSQL port
});

export default DBpool ;