// Authentication Utility Functions
class AuthUtils {
  // Simple encryption function (for demo purposes - in production use proper encryption)
  static encrypt(text) {
    const key = 'HLP_SECRET_KEY_2024';
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encrypted += String.fromCharCode(charCode);
    }
    return btoa(encrypted); // Base64 encode
  }

  // Simple decryption function
  static decrypt(encryptedText) {
    const key = 'HLP_SECRET_KEY_2024';
    const text = atob(encryptedText); // Base64 decode
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      decrypted += String.fromCharCode(charCode);
    }
    return decrypted;
  }

  // Hash function for additional security
  static hash(text) {
    let hash = 0;
    if (text.length === 0) return hash.toString();
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  }

  // Validate email format
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate password strength
  static validatePassword(password) {
    if (password.length < 6) {
      return { valid: false, message: 'Password must be at least 6 characters long' };
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return { valid: false, message: 'Password must contain at least one lowercase letter' };
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return { valid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/(?=.*\d)/.test(password)) {
      return { valid: false, message: 'Password must contain at least one number' };
    }
    return { valid: true, message: 'Password is strong' };
  }

  // Store user data securely
  static storeUser(email, password) {
    const users = this.getUsers();
    const hashedPassword = this.hash(password);
    const encryptedPassword = this.encrypt(hashedPassword);
    
    users[email] = {
      password: encryptedPassword,
      createdAt: new Date().toISOString(),
      lastLogin: null
    };
    
    localStorage.setItem('hlp_users', JSON.stringify(users));
    return true;
  }

  // Get all users
  static getUsers() {
    return JSON.parse(localStorage.getItem('hlp_users') || '{}');
  }

  // Verify user credentials
  static verifyUser(email, password) {
    const users = this.getUsers();
    if (!users[email]) {
      return { valid: false, message: 'User not found' };
    }

    const hashedPassword = this.hash(password);
    const storedEncryptedPassword = users[email].password;
    const decryptedPassword = this.decrypt(storedEncryptedPassword);

    if (hashedPassword === decryptedPassword) {
      // Update last login
      users[email].lastLogin = new Date().toISOString();
      localStorage.setItem('hlp_users', JSON.stringify(users));
      return { valid: true, message: 'Login successful' };
    } else {
      return { valid: false, message: 'Invalid password' };
    }
  }

  // Check if user exists
  static userExists(email) {
    const users = this.getUsers();
    return users.hasOwnProperty(email);
  }

  // Set current user session
  static setCurrentUser(email) {
    localStorage.setItem('hlp_current_user', email);
  }

  // Get current user
  static getCurrentUser() {
    return localStorage.getItem('hlp_current_user');
  }

  // Clear current user session
  static clearCurrentUser() {
    localStorage.removeItem('hlp_current_user');
  }
}
