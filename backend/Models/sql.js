import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database connection
const db = new sqlite3.Database(path.join(__dirname, 'database.db'), (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to SQLite database');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            phone TEXT
        )`);
    }
});

// Create a new user
const createUser = (name, email, password, phone) => {
    const sql = `INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)`;  
    db.run(sql, [name, email, password, phone], function (err) {
        if (err) {
            console.error('Error creating user:', err.message);
            return err;
        }
        return this.lastID;
    });

};



// Read user by ID
const getUserById = (id, callback) => {
    const sql = `SELECT * FROM users WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        callback(err, row);
    });
};

// Read all users
const getAllUsers = () => {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching users:', err.message);
            return;
        }
        rows.forEach((row) => {
            console.log(row);
        });
        return rows;
    });
};

// Read one user
const getOneUser = (name, callback) => {
    const sql = `SELECT * FROM users WHERE name = ?`;
    db.get(sql, [name], (err, row) => {
        callback(err, row);
    });
};
// Read one user by email
const getOneUserByEmail = async(email) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
   const user = db.prepare(sql);
   
    return user;
};

// Update user by ID
const updateUser = (id, name, email, callback) => {
    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    db.run(sql, [name, email, id], function (err) {
        callback(err, { id, name, email });
    });
};

// Delete user by ID
const deleteUser = (id, callback) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, { deletedId: id });
    });
};

// Export functions
export { createUser, getUserById, getAllUsers, updateUser, deleteUser, getOneUser, getOneUserByEmail };
