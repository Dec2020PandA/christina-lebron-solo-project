import React from 'react';
import { Link } from '@reach/router';

const NewAcctForm = () => {
  return (
    <div className="new-acct-form">
      <h2 className="heading">Create New Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" />
        </div>
        <button type="submit" class="button">Create</button>
        <p>Already a user? <Link to="/">Sign in here</Link></p>
      </form>
    </div>
  )
}

export default NewAcctForm;