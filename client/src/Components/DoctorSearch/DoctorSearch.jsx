import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
// import DoctorList from "./DoctorList";
import Footer from '../Footer';
import checkicon from '../../Assets/Images/doctor-image/check.png';
import doctorImg from '../../Assets/Images/doctor-search/doc-search.png';
import '../DoctorSearch/DoctorCard.css';
import DoctorCard from "../DoctorSearch/DoctorCard";
import { NavLink } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";

const DoctorSearch = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar />
            <section id="doctor-search">
                <form method="GET">
                    <div className="section-img">
                        <img src={doctorImg} alt="" />
                        <div className="header">
                            <h2>Book an Appointment</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="content-box-md">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="row search-flexed mx-auto">
                                        <div className="col-md-9">
                                            <div className="row mx-3">
                                                <div className="col-md-12">
                                                    <form className="d-flex m-4 mx-0">
                                                        <label className="pt-2 pe-2">Search</label>
                                                        <input className="form-control me-2" type="search" placeholder="Search Query Goes Here"
                                                            value={searchTerm}
                                                            onChange={e => setSearchTerm(e.target.value)}
                                                            aria-label="Search" />
                                                    </form>

                                                </div>
                                            </div>
                                            <h4 className="my-4 mx-3" style={{ color: "rgba(33, 132, 187, 1)" }}>Get in touch with the listed doctors !</h4>
                                            <DoctorCard search={searchTerm} />
                                        </div>
                                        <div className="col-md-3">
                                            <div className="advert-container py-5 px-3 mt-3">
                                                <h3>Your Data is Our Priority </h3>
                                                <p className="mt-4"> <img src={checkicon} alt="" /> Data is Private to the doctors</p>
                                                <p> <img src={checkicon} alt="" /> Trusted Doctors</p>
                                                <p><img src={checkicon} alt="" /> Easier accessible data</p>
                                                <NavLink to="/readmore" className="btn btn-primary btn-sm mt-3">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default DoctorSearch;