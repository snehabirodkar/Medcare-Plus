import React from "react";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import Navbar from "../NavigationBar/Navbar";

const Dietitian = () => {
    return (
        <>
        <Navbar />
            <section id="dentist">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="Dietitian" />
                                <p>A dietitian, medical dietitian, or dietician is an expert in identifying and treating disease-related malnutrition and in conducting medical nutrition therapy, for example designing an enteral tube feeding regimen or mitigating the effects of cancer cachexia.</p>
                                <p>A dietitian, medical dietitian, or dietician[1] is an expert in identifying and treating disease-related malnutrition and in conducting medical nutrition therapy, for example designing an enteral tube feeding regimen or mitigating the effects of cancer cachexia. Many dietitians work in hospitals and usually see specific patients where a nutritional assessment and intervention has been requested by a doctor or nurse, for example if a patient has lost their ability to swallow or requires artificial nutrition due to intestinal failure.</p>

                                <h2 className="py-3" style={{ color: "#2184BB" }}>Types of Dietitian</h2>
                                <ol>
                                    <h4 style={{ color: "#2184BB" }}><li>Clinical / Therapeutic Dietitian</li></h4>
                                    <p>The majority of dietitians are clinical, or therapeutic, dietitians. Clinical dietitians review medical charts and talk with patients' families. They work with other health care professionals and community groups to provide nourishment, nutritional programs and instructional presentations to benefit people of all ages, and with a variety of health conditions. This is accomplished by developing individual plans to meet nutritional needs. These plans include nourishment, tube feedings (called enteral nutrition), intravenous feedings (called parenteral nutrition) such as total parenteral nutrition (TPN) or peripheral parenteral nutrition (PPN), diets, and education. Clinical dietitians provide individual and group educational programs for patients and family members about their nutrition and health.
                                    </p>
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

export default Dietitian;