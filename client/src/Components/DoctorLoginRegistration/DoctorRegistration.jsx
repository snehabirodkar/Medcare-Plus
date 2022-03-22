import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LoginImg from "../LoginRegistration/LoginImg";
import SectionHeader from "../SectionHeader";
import emailjs from 'emailjs-com';
import Navbar from "../NavigationBar/Navbar";

const DoctorRegistration = () => {

    const history = useHistory();
    const [doctor, setDoctor] = useState({
        name: "", email: "", designation: "", experience: "", phone: "", location: "", password: "", approved: 0, numReviews: 0,
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setDoctor({ ...doctor, [name]: value });
    }
    const submitMail = (e) => {
        alert("This is submit mail !");
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_iahndb7', 'template_euub6ik', e.target, 'user_zfai6BIAv43mG08ahqiQr').then(res => {
            alert("Registration Mail Sent !");
            console.log(res);
        }).catch(err => console.log(err));
    }
    const PostData = async (e) => {
        submitMail(e);
        e.preventDefault();

        const { name, email, designation, experience, phone, location, password, approved, numReviews } = doctor;

        const res = await fetch('/doctorRegister', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, designation, experience, phone, location, password, approved, numReviews
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history.push("/doctor/Login");
        }
    }

    let date = new Date();
    let today = date.toDateString();

    date.setDate(date.getDate() + 1);
    let tomorrow = date.toDateString();

    return (
        <>
            <Navbar />
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
                                        <SectionHeader title="Doctor Registration" />
                                        <form onSubmit={PostData}>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Full Name</label>
                                                <input type="text" class="form-control"
                                                    name="name" id="name" value={doctor.name} onChange={handleInputs} placeholder="Example: Dr. Amit Janna" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" name="email" id="email" value={doctor.email} onChange={handleInputs} placeholder="Example: amitjanna@gmail.com" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="dregisterationnum" class="form-label">Doctor Registration Number</label>
                                                <input type="text" class="form-control" name="dregisterationnum" id="dregisterationnum" placeholder="Example: DCGA56382" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Designation</label>
                                                <input type="text" class="form-control" name="designation" id="designation" value={doctor.designation} onChange={handleInputs} placeholder="Example: Dental Surgeon" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Years of Experience</label>
                                                <input type="number" min="1" class="form-control" name="experience" id="experience" value={doctor.experience} onChange={handleInputs} placeholder="Example: 11 Years" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" name="phone" id="phone" value={doctor.phone} onChange={handleInputs} placeholder="Example: 8452083830" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Location</label>
                                                <input type="text" class="form-control" name="location" id="location" value={doctor.location} onChange={handleInputs} placeholder="Example: Bandra, Mumbai" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="" class="form-label">Password</label>
                                                <input type="password" class="form-control" name="password" id="password" value={doctor.password} onChange={handleInputs} />
                                            </div>
                                            <div class="mb-3">
                                                <input type="number" class="form-control" name="approved" id="approved" value={0} onChange={handleInputs} hidden />
                                            </div>
                                            <div class="mb-3">
                                                <input type="number" class="form-control" name="num-reviews" id="num-reviews" value={0} onChange={handleInputs} hidden />
                                            </div>
                                            <div class="mb-3">
                                                <input type="text" class="form-control" name="tom-date" id="tom-date" value={tomorrow} onChange={handleInputs} hidden />
                                            </div>
                                            {/* <div class="mb-3">
                                                <input type="number" class="form-control" name="user" id="user" value={doctor.user} onChange={handleInputs} hidden/>
                                            </div> */}
                                            <input type="submit" class="btn btn-primary w-100" value="Register" />
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 mx-auto">
                                                <p className="mt-5 text-center">Have an Account? Login</p>
                                                <NavLink to="/doctor/login" className="btn btn-outline-primary w-100">Login</NavLink>
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

export default DoctorRegistration;