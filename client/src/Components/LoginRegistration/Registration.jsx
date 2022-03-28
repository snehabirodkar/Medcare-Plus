import React, { useState } from "react";
import LoginImg from "./LoginImg";
import { NavLink, useHistory } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";

const Registration = () => {
    const history = useHistory();
    const [patient, setPatient] = useState({
        name: "", aadhar: "", age: "", email: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);

        name = e.target.name;
        value = e.target.value;

        setPatient({ ...patient, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, aadhar, age, email, password, cpassword } = patient;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, aadhar, age, email, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration Details");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history.push("/login");
        }
    }


    return (
        <>
            <Navbar />
            <section id="registration">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <LoginImg />
                            <div className="col-md-6 px-4 my-auto">
                                <h1 className="text-center" style={{ color: '#2184BB', fontWeight: 'bold' }}>Medcare +</h1>
                                <form className="mx-5" method="POST">
                                    <div class="mb-3">
                                        <label for="exampleInputName" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" name="name" id="name" autoComplete="off"
                                            value={patient.name} onChange={handleInputs} required placeholder="Enter Name"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputAadhar" class="form-label">Aadhar Number</label>
                                        <input type="text" class="form-control" name="aadhar" id="aadhar" autoComplete="off"
                                            value={patient.aadhar} onChange={handleInputs} required placeholder="Enter Aadhar Number" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputAge" class="form-label">Age</label>
                                        <input type="text" class="form-control" name="age" id="age" autoComplete="off"
                                            value={patient.age} onChange={handleInputs} required min="18" max="100" placeholder="Enter Age > 18"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" name="email" id="email" autoComplete="off" aria-describedby="emailHelp"
                                            value={patient.email} onChange={handleInputs} placeholder="Enter Email"
                                            required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" name="password" id="password" autoComplete="off"
                                            value={patient.password} onChange={handleInputs}
                                            required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Re-Enter Password</label>
                                        <input type="password" class="form-control" id="cpassword" name="cpassword" autoComplete="off"
                                            value={patient.cpassword} onChange={handleInputs}
                                            required />
                                    </div>
                                    <input type="submit" name="signup" id="signup" value="Register" class="btn btn-primary w-100" onClick={PostData} />
                                </form>
                                <div className="row">
                                    <div className="col-md-10 mx-auto">
                                        <p className="mt-5 text-center">Already have an Account? Do Login</p>
                                        <NavLink to="/login" className="btn btn-outline-primary w-100">Login</NavLink>
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

export default Registration;