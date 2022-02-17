import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import '../../../src/helper.css';
import './HomeSection.css';
import HomeImg from '../../Assets/Images/home-image/home-img.png';
import { NavLink } from "react-router-dom";
const HomeSection = () => {
    return (
        <>
            <section id="home-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-box-md">
                            <div className="col-10 mx-auto">
                                <div className="row h-7">
                                    <div className="col-md-6  my-auto">
                                        <h1 className="home-header">Providing Best Medical Health Care</h1>
                                        <h4 className="home-sub-header pt-2">24x7 Consultation Available</h4>
                                        <p className="home-header-decsription pt-2">
                                            Are you tired  up waiting for hours to consult with Physician. Book and appointement to be served on time
                                        </p>
                                        <div className="btn-container mt-5">
                                            <NavLink className="c-btn c-btn-primary" to="/doctorsearch">Know More</NavLink>
                                        </div>
                                    </div>
                                    <div className="col-md-6  my-auto">
                                        <div className="image-container">
                                            <img src={HomeImg} alt="doctor-with-a-notepad" />
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

export default HomeSection;