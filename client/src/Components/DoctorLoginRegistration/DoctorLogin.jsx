import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LoginImg from "../LoginRegistration/LoginImg";
import SectionHeader from "../SectionHeader";

import { UserContext } from "../../App"

const DoctorLogin = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/doctorSignin', {
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
            
            localStorage.setItem("currentdoctorloggedin", email);
            console.log(localStorage.getItem("currentdoctorloggedin"));
            window.alert("Login Successful");
            console.log("Login Successful");

            history.push('/');
        }
    }

    return (
        <>
            <section id="doctor-registration">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 my-auto">
                                        <LoginImg />
                                    </div>
                                    <div className="col-md-6 my-auto">
                                        <SectionHeader title="Doctor Login" />
                                        <form>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" name="email" id="email" value={email}
                                                    onChange={(e) => setEmail(e.target.value)} placeholder="Example: amitjanna@gmail.com" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Password</label>
                                                <input type="password" class="form-control" name="password" id="password" value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <button type="submit" class="btn btn-primary w-100" onClick={loginUser}>Login</button>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 mx-auto">
                                                <p className="mt-5 text-center">Dont Have an Account? Do Register</p>
                                                <NavLink to="/doctor/register" className="btn btn-outline-primary w-100">Register</NavLink>
                                            </div>
                                        </div>
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

export default DoctorLogin;