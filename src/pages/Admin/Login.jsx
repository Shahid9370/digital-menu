import React, { useState } from 'react';
import Header from '../../components/Header.jsx';
import styles from '../../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for auth API call
    console.log('Login attempt:', { username, password });
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className={`${styles.loginContainer} container-fluid`}>
        <Header />
        <div className={styles.loginWrapper}>
          <h2 className={styles.loginTitle}>Admin Login</h2>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`${styles.loginInput} form-control`}
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`${styles.loginInput} form-control`}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className={`${styles.loginButton} btn btn-primary w-100`}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;