import React from 'react';
import 'boxicons/css/boxicons.min.css';
import "../Styles/login.css"


function Login(){
    return(
        
        <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required/>
                <i class='bxr  bx-user-circle'  ></i>  
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required/>
                <i class='bxr  bx-lock-keyhole'  ></i> 
            </div>

            <div class="remember-forgot">
                <label><input type="checkbox"/>Remember me?</label>
                <a href="#">Forgot password</a>
            </div>

            <button type="submit" class="btn">Login</button>

            <div class="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
    
    );
}
export default Login;