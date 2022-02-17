import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import SectionHeader from "../SectionHeader";

const Dentist = () => {
    return (
        <>
            <section id="dentist">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="Dental Surgeon" />
                                <p>A dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, of diseases. A general dentist is your primary care dental provider. This dentist diagnoses, treats, and manages your overall oral health care needs, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education. </p>
                                <p>All practicing general dentists have earned either a DDS or DMD degree (doctor of dental surgery or doctor of dental medicine, respectively). There is no difference between the two degrees or the curriculum requirements that dentists must meet. Some schools simply award the one degree, while others award the other. Generally, three or more years of undergraduate education plus four years of dental school is required to become a general dentist. Additional post-graduate training is required to become a dental specialist.</p>

                                <h2 className="py-3" style={{ color: "#2184BB" }}>Types of Dental Surgeon</h2>
                                <ol>
                                    <h4 style={{ color: "#2184BB" }}><li>Dental Public Health Clinics</li></h4>
                                    <p>Dental public health clinics promote dental health through organized community efforts. The clinics serve to educate the public through group dental care programs with the goal of preventing and controlling dental diseases on a community-wide basis. Dental public health clinics offer such services as finding a dentist, developing dental care programs for schools, providing information on fluoridation in the community, answering common questions about oral health, and providing other oral health resources and support materials to their community.
                                    </p>

                                    <h4 style={{ color: "#2184BB" }}><li>Oral and Maxillofacial Radiologist</li></h4>
                                    <p>A radiologist is the oral health care provider who specializes in the taking and interpretation of all types of X-ray images and data that are used in the diagnosis and management of diseases, disorders, and conditions of the oral and maxillofacial region.</p>
                                    
                                    
                                    <h4 style={{ color: "#2184BB" }}><li>Oral Pathologist</li></h4>
                                    <p>An oral pathologist is the oral health care provider who studies the causes of diseases that alter or affect the oral structures (teeth, lips, cheeks, jaws) as well as parts of the face and neck. Oral pathologists examine and provide a diagnosis of the biopsy, tissue, or lesion sent to them by other oral health care providers.</p>

                                    <h4 style={{ color: "#2184BB" }}><li>Endodontist</li></h4>
                                    <p>An endodontist is the dental specialist concerned with the causes, diagnosis, prevention, and treatment of diseases and injuries of the human dental pulp or the nerve of the tooth. This specialist may perform simple to difficult root canal treatments or other types of surgical root procedures.</p>
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
            <Footer/>
        </>
    );
};

export default Dentist;