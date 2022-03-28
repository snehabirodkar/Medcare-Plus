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
                // console.log(PatientEmail);
                if (PatientEmail == item.email) {
                    LoggedInUser = item.name;
                    localStorage.setItem("cuser", LoggedInUser);
                }
            })
            // console.log("PatientEmail:", PatientEmail);

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
            // console.log("Doctors are:", getDoctors);

            // console.log(DoctorEmail);

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
        var a = document.cookie;
        console.log(a);
        if (a.includes("true")) {
            return (
                <>
                    <div className="d-flex flex-row-reverse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="btn btn-danger btn-sm mx-2" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </>
            )
        }
        // if (state) {
        //     return (
        //         <>
        //             <div className="d-flex flex-row-reverse">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <NavLink className="btn btn-danger btn-sm mx-2" to="/logout">Logout</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </>
        //     )
        // } 
        else {

            return (
                <>
                    <div className="d-flex justify-content-around me-5 pe-5">
                        <NavLink to="/medcare/login" className="btn btn-primary">Medcare Signin</NavLink>
                    </div>
                </>
            )
        }
    }


    return (

        <>
            <section id="top-nav">
                <div className="d-flex" style={{ "justifyContent": "space-between" }}>
                    <div className="d-flex flex-row-reverse">
                        <img src={facebook} alt="Facebook Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={instagram} alt="Instagram Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={github} alt="Github Logo" height="27px" style={{ padding: "0 4px" }} />
                    </div>
                    <h6 style={{ "paddingRight": "50px", "paddingTop": "5px" }}>Greetings, {localStorage.getItem("cuser")}</h6>
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
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/doctorsearch">Doctor Search</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link " href="https://medcare-bloodbankstats.netlify.app/" target="_blank">Blood Bank</a>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ambulancelist">Ambulance</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/doctorapproval">Approval page</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pharmacy">Pharmacy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctorsearch">Doctor Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://medcare-bloodbankstats.netlify.app/">Blood Bank</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/patient/dashboard/">Patient Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctor/dashboard/">Doctor Dashboard</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/news">News(Beta)</NavLink>
                            </li> */}
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dashboard
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/patient/dashboard/">Patient Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/doctor/dashboard/">Doctor Dashboard</a>
                                    </li>
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