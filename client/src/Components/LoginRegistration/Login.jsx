import React, {useState, useContext} from "react";
import './Login.css';
import { NavLink, useHistory } from "react-router-dom"; 
import LoginImg from "./LoginImg";

import { UserContext } from "../../App"

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, 
                password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else {
            dispatch({type:"USER", payload:true})
            localStorage.setItem("currentpatientloggedin", email);
            window.alert("Login Successful");
            console.log("Login Successful");

            history.push('/');
        }
    }

    return (
        <>
            <section id="login">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <LoginImg />
                            <div className="col-md-6 px-4 my-auto">
                                <h1 className="text-center" style={{ color: '#2184BB', fontWeight: 'bold' }}>Medcare +</h1>
                                <form className="mx-5">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" name="email" id="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="emailHelp" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        class="form-control" name="password" id="password" required />
                                    </div>
                                    <input type="submit" class="btn btn-primary w-100" name="signin" id="signin" value="Log In" onClick={loginUser} />
                                </form>
                                <div className="row">
                                    <div className="col-md-10 mx-auto">
                                        <p className="mt-5 text-center">Dont Have an Account? Do Register</p>
                                        <NavLink to="/register" className="btn btn-outline-primary w-100">Register</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;