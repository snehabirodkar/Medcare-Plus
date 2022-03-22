import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

const Ent = () => {
    return (
        <>
        <Navbar />
            <section id="dentist">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="ENT (Ear, Nose, Throat)" />
                                <p>ENT stands for Ear, Nose and Throat.  ENT is technically known as Otolaryngology, which is the diagnosis and treatment of ailments affecting one’s head and neck, including the ear, nose and throat.  ENT procedures at Iowa City Ambulatory Surgery Center (Iowa City ASC) are performed on adults and children.</p>
                                <p>A dietitian, medical dietitian, or dietician[1] is an expert in identifying and treating disease-related malnutrition and in conducting medical nutrition therapy, for example designing an enteral tube feeding regimen or mitigating the effects of cancer cachexia. Many dietitians work in hospitals and usually see specific patients where a nutritional assessment and intervention has been requested by a doctor or nurse, for example if a patient has lost their ability to swallow or requires artificial nutrition due to intestinal failure.</p>

                                <h2 className="py-3" style={{ color: "#2184BB" }}>Procedure for ENT</h2>
                                <ol>
                                    <h4 style={{ color: "#2184BB" }}><li>Ear Procedures</li></h4>
                                    <ul>
                                        <li>Ear tubes (tympanostomy)</li>
                                        <li>Myringoplasty</li>
                                        <li>Tympanoplasty</li>
                                        <li>Tympanoplasty with Ossicular Reconstruction</li>
                                        <li>Tympanomastoidectomy</li>
                                        <li>Tympanomastoidectomy with Ossicular Reconstruction</li>
                                        <li>Stapedectomy</li>
                                    </ul>
                                    <h4 style={{ color: "#2184BB" }} className="pt-3"><li>Larynx Procedures</li></h4>
                                    <ul>
                                        <li>Microlaryngoscopy with biopsy</li>
                                        <li>Esophagoscopy</li>
                                        <li>Laryngoplasty</li>
                                    </ul>
                                </ol>
                                <div className="btn-container text-center pt-3">
                                <hr />
                                    <p>Do visit the doctor list below</p>
                                    <NavLink to="/doctorsearch" className="btn btn-primary">Check the Doctor List</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Ent;