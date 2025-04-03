import cookie from 'cookie';
import database from './database.js';
import { createUser, getAllUsers, getOneUser } from '../Models/sql.js';

class Login {
  authenticateUser(email, password) {
    const user = getOneUser(email, (err, user) => {
      if (err) {
        console.error('Error fetching user:', err);
        return null;
      }
      return user;
    }
    );
  }

  homepageAuthentication(userId, sessionId) {
    const user = database.registered_users.find((user) => user.sessionId === sessionId);

    if (!user) {
      console.log('You are not authorized to view this page');
      return false;
    }

    console.log('Welcome to the homepage');
    return true;
  }

  generateSessionId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sessionId = '';

    for (let i = 0; i < 32; i++) {
      sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return sessionId;
  }

  setCookie(name, value) {
    return cookie.serialize(name, value);
  }

  registerUser(username, password, email) {
    const user = {
      username,
      password,
      email,
      sessionId: this.generateSessionId(),
    };

    createUser(user.username, user.email, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
      } else {
        console.log('User created:', result);
      }
    });
    console.log(getAllUsers());
    console.log('User registered successfully');

    return this.setCookie('sessionId', `${user.username}%${user.sessionId}`);
  }
}

export default new Login();
