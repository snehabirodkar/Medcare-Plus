import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import '../../../src/helper.css';
import './AboutSection.css';
import SectionHeader from "../SectionHeader";
import symptom from '../../Assets/Images/home-image/symptom.png';
import consult from '../../Assets/Images/home-image/consult.png';
import pharmacy from '../../Assets/Images/home-image/pharmacy.png';

const AboutSection = () => {
    return (
        <>
            <section id="about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-box-md">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <SectionHeader title="What We Do" />
                                    <div className="col-md-4">
                                        <div className=" card-bg p-4">
                                            <div className="row">
                                                <div className="col-4 mx-auto">
                                                    <img className="about-img my-4 " src={symptom} alt="symptom" />
                                                </div>
                                            </div>
                                            <h4>Symptom Check</h4>
                                            <p>The only way to identify any disease is by getting checked for certain symptoms that you might show due to disease.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className=" card-bg p-4">
                                            <div className="row">
                                                <div className="col-4 mx-auto">
                                                    <img className="about-img my-4" src={consult} alt="consult" />
                                                </div>
                                            </div>
                                            <h4>Consult Doctors</h4>
                                            <p>Once the symptom has been identified the main motive is to get it cured to make sure to consult a doctor.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className=" card-bg p-4">
                                            <div className="row">
                                                <div className="col-4 mx-auto">
                                                    <img className="about-img my-4" src={pharmacy} alt="pharmacy" />
                                                </div>
                                            </div>
                                            <h4>Visit Pharmacy</h4>
                                            <p>After the consulting process make sure to get proper medication and get going to book medicines.</p>
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

export default AboutSection;