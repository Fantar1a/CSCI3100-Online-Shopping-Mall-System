import './CSS/Login.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  const [menu, setMenu] = React.useState("login");

  return (
    <div className='login'>
      <div className="login-container">
        <h1>User Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='SID@link.cuhk.edu.hk' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="login-login">
          Do not have an account? 
          <span onClick={() => { setMenu("signup") }}>
            <Link to='/signup' style={{ textDecoration: 'none', color: 'palevioletred' }}>
              SignUp here
            </Link>
            {menu === "signup" ? <hr/> : null}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login;
