// database.js
import SQLite from 'react-native-sqlite-storage';
var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');

const dbPath = 'D:\\ReactNative Projects\\mydatabase.db';
const db = SQLite.openDatabase({ 
  name: dbPath, 
  location: 'default' 
},
()=>{},
error => {console.error(error)}
);

const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)',
      [],
      (_, result) => {
        if (result.rowsAffected > 0) {
          console.log('Database tables created successfully');
        } else {
          console.log('Error creating database tables');
        }
      }
    );
  });
};

const insertUser = (name, email, password) => {
  db.transaction((tx) => {
    tx.executeSql('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
  });
};

const getUserByEmailAndPassword = (email, password, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};

const getUserByEmail = (email, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};


export { createTables, insertUser, getUserByEmailAndPassword, getUserByEmail };
