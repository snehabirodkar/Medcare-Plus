import React, { useState, useEffect } from "react";
import facebook from "../../Assets/Images/icons/facebook.png";
import instagram from "../../Assets/Images/icons/instagram.png";
import github from "../../Assets/Images/icons/github.png";
import Footer from "../Footer";
import { useHistory, NavLink } from "react-router-dom";
import "./dashboard.css";
import Ratings from "../DoctorSearch/Ratings";
// import { set } from "mongoose";

const PatientDashboard = () => {
    const history = useHistory();
    var appointmentData = "";

    // FETCHING PATIENT APPOINTMENTS
    const [patientDetails, setPatientDetails] = useState([]);

    // FETCHING PATIENT REVIEWS
    const [patientReviews, setPatientReviews] = useState([]);

    // CURRENT USER LOGGED IN
    const [currentUser, setCurrentUser] = useState([]);

    // MIDDLEWARE
    const patientMiddleware = async () => {
        try {
            const res = await fetch("/getPatientMiddleware", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();
            // console.log(data);
            appointmentData = data;
            setCurrentUser(data);
            // console.log(currentUser);
            // localStorage.setItem("patientName", data.name);
            // console.log("Appointment Data new:",appointmentData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push("/login");
        }
    };


    // FETCHING PATIENT APPOINTMENT
    const getPatientData = async () => {
        try {
            const res = await fetch("/getPatientAppointment", {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            });
            const getPatient = await res.json();
            console.log("Patients Appointmet:", getPatient);
            setPatientDetails(getPatient);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    // FETCHING REVIEW
    const getPatientReview = async () => {
        try {
            const res = await fetch("http://localhost:5000/getDoctorReview", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getReviews = await res.json();
            console.log(getReviews);
            setPatientReviews(getReviews);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        patientMiddleware();
        getPatientData();
        getPatientReview();
    }, []);

    return (
        <>
            <section id="top-nav">
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <div className="d-flex flex-row-reverse">
                        <img
                            src={facebook}
                            alt="Facebook Logo"
                            height="27px"
                            style={{ padding: "0 4px" }}
                        />
                        <img
                            src={instagram}
                            alt="Instagram Logo"
                            height="27px"
                            style={{ padding: "0 4px" }}
                        />
                        <img
                            src={github}
                            alt="Github Logo"
                            height="27px"
                            style={{ padding: "0 4px" }}
                        />
                    </div>
                    <h6 style={{ paddingRight: "50px", paddingTop: "5px" }}>
                        Greetings, {currentUser.name}
                    </h6>
                </div>
            </section>

            <nav
                id="navbar-c"
                className="navbar navbar-expand-lg navbar-light bg-light c-navbar py-4"
            >
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        style={{ color: "#2184BB", fontSize: "24px" }}
                    >
                        <strong>MedCare Plus</strong>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctorsearch">
                                    Doctor Search
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link "
                                    href="https://medcare-bloodbankstats.netlify.app/"
                                    target="_blank"
                                >
                                    Blood Bank
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ambulancelist">
                                    Ambulance
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pharmacy">
                                    Pharmacy
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex flex-row-reverse">
                            <NavLink class="btn btn-danger" to="/logout">
                                Logout
                            </NavLink>
                        </form>
                    </div>
                </div>
            </nav>

            <section id="dashboard-container">
                <div className="container">
                    <div className="content-box-md">
                        <h4>Greetings, {currentUser.name}</h4>
                        <hr />
                        <div className="mt-5"></div>
                        <div className="d-flex justify-content-between patient-dashboard">
                            <div className="work-container w-70">
                                <h3 className="mb-4">My Appointments</h3>
                                <div className="appointment-card-wrapper">
                                    {/* card 1 */}

                                    {patientDetails.map((item, index) => {
                                        {
                                            {/* console.log(`Appointment Details ${item.pname}`, item); */ }
                                        }
                                        if (item.pname == currentUser.name) {
                                            var name = "/doctor/prescription/" + item.pname;
                                            {/* localStorage.setItem("prescriptionPatientName" + itemIndex, item.pname);
                        itemIndex = itemIndex + 1;
                        localStorage.setItem("prescriptionDoctorName", item.doctor);
                        var hrefLink = "/doctor/prescription/" + item.pname; */}
                                            // console.log(item);
                                            return (
                                                <>
                                                    <div className="appointment-card-single" key={index}>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="appointment-card-left w-70">
                                                                <p>
                                                                    <b>Doctor Name:</b> {item.doctor}
                                                                </p>
                                                                <p>
                                                                    <b>Priority:</b> {item.priority}
                                                                </p>
                                                                <p>
                                                                    <b>Mode:</b>{item.mode}
                                                                </p>
                                                            </div>
                                                            <div className="appointment-card-right">
                                                                <p>
                                                                    <b>{item.time} | {item.date}</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="d-flex flex-row-reverse">
                                                            <a href="https://medcareplus-video.netlify.app/" target="_blank" className="btn btn-success mx-1">
                                                                Video Call
                                                            </a>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }
                                    })}
                                </div>
                            </div>

                            <div className="review-container w-27">
                                <h3 className="mb-4">Sent: Ratings & Reviews</h3>
                                {
                                    patientReviews.map((item, index) => {
                                        if (item.pname == currentUser.name) {
                                            console.log(item);
                                            return (
                                                <>
                                                    <div className="dashboard-review-wrapper">
                                                        <p className="m-0">To: {item.name}</p>
                                                        <p className="pt-1 m-0">
                                                            <Ratings value={item.rating} />
                                                        </p>
                                                        <p className="pt-1">
                                                            Review: {item.comment}
                                                        </p>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PatientDashboard;
