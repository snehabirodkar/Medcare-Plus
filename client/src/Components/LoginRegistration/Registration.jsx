import React, {useState} from "react";
import LoginImg from "./LoginImg";
import { NavLink, useHistory } from "react-router-dom"; 

const Registration = () => {
    const history = useHistory();
    const [patient, setPatient] = useState({
        name: "", email: "", password: "", cpassword: ""
    });
    
    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setPatient({...patient, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, password, cpassword} = patient;

        const res = await fetch('/register',  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 ||  !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
    
            history.push("/login");
        }
    }
    

    return (
        <>
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
                                        value={patient.name} onChange={handleInputs} required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" name="email" id="email" autoComplete="off"   aria-describedby="emailHelp"
                                        value={patient.email} onChange={handleInputs} 
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
                                    <input type="submit" name="signup" id="signup" value="Register"  class="btn btn-primary w-100" onClick={PostData} />
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