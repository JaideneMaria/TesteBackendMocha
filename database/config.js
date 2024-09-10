import mysql from 'mysql2';

// Conexão inicial com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lionEletronics',
    port: 3311
});

db.connect(err => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});


export default db;
