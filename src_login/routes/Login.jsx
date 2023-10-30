import React from "react";
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
    return(
        <div>
        <div className="login">
        <form>
            <h1 class="form_h1">Fazer Login</h1>
            <label>
                <input type="text" placeholder="Usuário"/>
            </label>
            <label>
                <input type="password" placeholder="Senha"/>
            </label>
            <div>
            <Link to="home"><button class="form_btn">Acessar</button></Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Login