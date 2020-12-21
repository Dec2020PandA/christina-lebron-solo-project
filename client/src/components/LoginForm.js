import React from 'react';
import { Link } from '@reach/router';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 class="heading">Login to your Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <div className="labels">
            <label htmlFor="password">Password</label>
            <a href="/" className="forgot-password">Forgot password?</a>
          </div>
          <input type="password" name="password" />
        </div>
        <button type="submit" class="button">Login</button>
        <p>New user? <Link to="/create-account">Create an account</Link></p>
      </form>
    </div>
  )
}

export default LoginForm;