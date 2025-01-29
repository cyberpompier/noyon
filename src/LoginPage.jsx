import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './LoginPage.css';

function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess();
    } catch (err) {
      setError('Incorrect email or password.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onLoginSuccess();
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  const handlePasswordReset = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent.');
    } catch (err) {
      setError('Failed to send password reset email.');
    }
  };

  return (
    <div className="login-page">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      {!isRegistering && (
        <button onClick={handlePasswordReset} className="reset-button">Forgot Password?</button>
      )}
      <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
}

export default LoginPage;
