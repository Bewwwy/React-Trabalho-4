import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login">
        <form>
            <h1>Fazer Login</h1>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
            <Link to="home"><button>Acessar</button></Link>
            </div>
        </form>
        </div>
    )
}

export default Login