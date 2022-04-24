import React, { useState, useEffect } from "react";
import facebook from "../../Assets/Images/icons/facebook.png";
import instagram from "../../Assets/Images/icons/instagram.png";
import github from "../../Assets/Images/icons/github.png";
import Footer from "../Footer";
import { useHistory, NavLink } from "react-router-dom";
import "./dashboard.css";
import Ratings from "../DoctorSearch/Ratings";

const DoctorDashboard = () => {
    const history = useHistory();
    var appointmentData = "";

    // FETCHING DOCTOR APPOINTMENTS
    const [doctorDetails, setDoctorDetails] = useState([]);

    // FETCHING DOCTOR REVIEWS
    const [doctorReviews, setDoctorReviews] = useState([]);

    // CURRENT USER LOGGED IN
    const [currentUser, setCurrentUser] = useState([]);

    const [prescription, setPrescription] = useState([]);

    // MIDDLEWARE
    const doctorMiddleware = async () => {
        try {
            const res = await fetch("/getDoctorMiddleware", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();
            console.log(data);
            setCurrentUser(data);
            // console.log(currentUser);

            appointmentData = data;
            //   setDoctorDetails(data);
            // localStorage.setItem("doctorName", data.name);
            // console.log("Appointment Data new:", appointmentData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push("/doctor/login");
        }
    };


    // FETCHING DOCTOR APPOINTMENT
    const getDoctorData = async () => {
        try {
            const res = await fetch("/getDoctorAppointment", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getDoctorAppointment = await res.json();
            //   console.log("Patients Appointmet:", getDoctorAppointment);
            setDoctorDetails(getDoctorAppointment);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    // FETCHING PRESCRIPTION DATA
    const getPrescrptionData = async () => {
        try {
            const res = await fetch("/getPrescription", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getPrescriptions = await res.json();
            //   console.log("NM", getPrescriptions);
            setPrescription(getPrescriptions);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    // FETCHING REVIEW
    const getDoctorReview = async () => {
        try {
            const res = await fetch("http://localhost:5000/getDoctorReview", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getReviews = await res.json();
            console.log(getReviews);
            setDoctorReviews(getReviews);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    // CANCEL APPOINTMENT
    const onDelete = async (id) => {
        try{
            const res = await fetch('/cancelAppointment', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            })
    
            window.alert("Are u sure You want Delete");

            window.location.reload();
            const data = await res.json();
            console.log(data);
    
            if (res.status === 200) {
                window.alert("Deleted Successfully");
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        doctorMiddleware();
        getDoctorData();
        getDoctorReview();
        getPrescrptionData();
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
                                <NavLink className="nav-link" to="/forum">
                                    Medcare Plus Forum
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctor/dashboard">
                                    Doctor Dashboard
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
                                <h3 className="mb-4">Booked Appointments</h3>
                                <div className="appointment-card-wrapper">
                                    {/* card 1 */}

                                    {doctorDetails.map((item, index) => {
                                        {
                                            {/* console.log(`Appointment Details ${item.pname}`, item); */ }
                                        }
                                        if (item.doctor == currentUser.name) {
                                            var name = "/doctor/prescription/" + item.pname;
                                            {/* localStorage.setItem("prescriptionPatientName" + itemIndex, item.pname);
                        itemIndex = itemIndex + 1;
                        localStorage.setItem("prescriptionDoctorName", item.doctor);
                        var hrefLink = "/doctor/prescription/" + item.pname; */}
                                            return (
                                                <>
                                                    <div className="appointment-card-single" key={index}>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="appointment-card-left w-70">
                                                                <p>
                                                                    <b>Patient Name:</b> {item.pname}
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
                                                            <a href={name} className="btn btn-primary mx-1">
                                                                Give Prescription
                                                            </a>
                                                            <button className="btn btn-outline-danger mx-2" onClick={() => onDelete(item._id)}>Delete Appointment</button>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }
                                    })}
                                </div>
                            </div>

                            <div className="review-container w-27">
                                <h3 className="mb-4">Ratings & Reviews</h3>
                                {
                                    doctorReviews.map((item, index) => {
                                        if (item.name == currentUser.name) {
                                            return (
                                                <>
                                                    <div className="dashboard-review-wrapper">
                                                        <p className="m-0">From: {item.pname}</p>
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
                        <h3 className="mb-4 mt-4">Medical Records (Medcare Archives)</h3>
                        <hr  className="mb-4"/>
                        <div className="">
                            {
                                prescription.map((item, index) => {
                                    if (currentUser.name == item.dname) {
                                        console.log(item)
                                        return (
                                            <>
                                                <div className="appointment-card-single">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="appointment-card-left w-70">
                                                            <p>
                                                                <b>Patient: </b> {item.pname}
                                                            </p>
                                                            <p>
                                                                <b>Diagnosis: </b> {item.diagnosis}
                                                            </p>
                                                            <p>
                                                                <b>Prescription: </b>{item.prescriptions}
                                                            </p>
                                                            <p>
                                                                <b>Diagnosed By: </b>{item.dname}
                                                            </p>
                                                        </div>
                                                        <div className="appointment-card-right">
                                                            <p>
                                                            Date of Consultancy: <b>{item.date}</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DoctorDashboard;