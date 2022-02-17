import { useContext } from "react"
import { NavLink } from "react-router-dom";
import './Navbar.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { UserContext } from '../../App';

import facebook from '../../Assets/Images/icons/facebook.png';
import instagram from '../../Assets/Images/icons/instagram.png';
import github from '../../Assets/Images/icons/github.png';
import { useEffect } from "react";

const Navbar = () => {

    var LoggedInUser = "";
    var data;
    // CURRENT PATIENT/USER WHICH IS LOGGED IN
    const patientLoggedIn = async () => {
        var PatientEmail = localStorage.getItem("currentpatientloggedin");
        try {
            const res = await fetch('/getPatientData', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            data = await res.json();
            data.map((item, index) => {
                console.log(PatientEmail);
                if (PatientEmail == item.email) {
                    LoggedInUser = item.name;
                    localStorage.setItem("cuser", LoggedInUser);
                }
            })
            console.log("PatientEmail:", PatientEmail);

        } catch (error) {
            console.log(error);
        }
    }


    // FETCHING CURRENT DOCTOR LOGGED IN
    var getDoctors;
    var currentdoctorloggedin;
    const getData = async () => {
        var DoctorEmail = localStorage.getItem("currentdoctorloggedin");
        try {
            const res = await fetch("http://localhost:5000/getData", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            getDoctors = await res.json();
            console.log("Doctors are:", getDoctors);

            console.log(DoctorEmail);

            getDoctors.map((item, index) => {
                if (DoctorEmail == item.email) {
                    currentdoctorloggedin = item.name;
                    console.log(currentdoctorloggedin);
                    localStorage.setItem("cuser", currentdoctorloggedin);
                }
            })


        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        patientLoggedIn();
        getData();
    }, []);

    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <div className="d-flex flex-row-reverse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="btn btn-danger btn-sm mx-2" to="/logout">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </>
            )
        } else {

            return (
                <>

                    {/* <NavLink className="btn btn-outline-light btn-sm mx-2" to="/register">Patient Registeration</NavLink>
                    <NavLink className="btn btn-outline-light btn-sm mx-2" to="/login">Patient Login</NavLink>
                    <NavLink className="btn btn-outline-light btn-sm mx-2" to="/admin/login">Admin Login </NavLink>
                    <NavLink className="btn btn-outline-light btn-sm mx-2" to="/admin/register">Admin Registrtation </NavLink>
                    <NavLink className="btn btn-outline-light btn-sm mx-2" to="/doctor/register">Doctor Registeration</NavLink>
                    <NavLink className="btn btn-outline-light btn-sm mx-2" to="/doctor/login">Doctor Login</NavLink> */}

                    <div className="d-flex justify-content-around me-5 pe-5">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Patient
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/login">Patient Login</a></li>
                                    <li><a className="dropdown-item" href="/register"> Patient Register</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Doctor
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/doctor/login">Doctor Login</a></li>
                                    <li><a className="dropdown-item" href="/doctor/register"> Doctor Register</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/admin/login">Admin Login</a></li>
                                    {/* <li><a className="dropdown-item" href="/admin/register"> Admin Register</a></li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </>
            )
        }
    }


    return (

        <>
            <section id="top-nav">
                <div className="d-flex" style={{ "justify-content": "space-between" }}>
                    <div className="d-flex flex-row-reverse">
                        <img src={facebook} alt="Facebook Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={instagram} alt="Instagram Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={github} alt="Github Logo" height="27px" style={{ padding: "0 4px" }} />
                    </div>
                    <h6 style={{ "padding-right": "50px", "padding-top": "5px" }}>Greetings, {localStorage.getItem("cuser")}</h6>
                </div>
            </section>

            <nav id="navbar-c" className="navbar navbar-expand-lg navbar-light bg-light c-navbar py-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{ color: "#2184BB", fontSize: "24px" }}><strong>MedCare Plus</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctorsearch">Doctor Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="https://medcare-bloodbankstats.netlify.app/" target="_blank">Blood Bank</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ambulancelist">Ambulance</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/doctorapproval">Approval page</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pharmacy">Pharmacy</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Appointment
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/appointment/patient">Patient Appointment</a></li>
                                    <li><a className="dropdown-item" href="/appointment/doctor"> Doctor Appointment</a></li>
                                </ul>
                            </li>
                        </ul>
                        <RenderMenu />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;