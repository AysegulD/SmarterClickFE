import React from 'react';
import './style.css';

function Signup(){
    return(
        
        <div className="signup">
        <form >
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name"></input>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name"></input>
            </div>
            <div className="form-group">
            <label>Email address</label>
            <input type="email"className="form-control" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"className="form-control" placeholder="Enter password"></input>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
        </form>
        </div>
    )
}
export default Signup;