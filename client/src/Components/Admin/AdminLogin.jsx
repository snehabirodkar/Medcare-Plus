import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../../App"
import Navbar from "../NavigationBar/Navbar";

const AdminLogin = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginAdmin = async (e) => {
        e.preventDefault();

        const res = await fetch('/adminSignin', {
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

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else {
            dispatch({ type: "USER", payload: true })

            window.alert("Login Successful");
            console.log("Login Successful");

            history.push('/admin/doctorapproval');
        }
    }

    return (
        <>
            <Navbar />
            <section id="login">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-6 px-4 my-auto mx-auto">
                                <h1 className="text-center" style={{ color: '#2184BB', fontWeight: 'bold' }}>MedCare Plus</h1>
                                <p className="text-center" style={{ fontWeight: 'bold', fontSize: "22px" }} >Admin Login</p>
                                <form className="mx-5">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" value="" class="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" value="" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100" onClick={loginAdmin}>Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminLogin;