import React from "react";
import Footer from "../Footer";
import SectionHeader from "../SectionHeader";
import { NavLink } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";

const Gynaecologist = () => {
    return (
        <>
        <Navbar />
            <section id="dentist">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="Gynaecologist" />
                                <p>Gynaecologist is the medical practice dealing with the health of the female reproductive system. Almost all modern gynaecologists are also obstetricians (see obstetrics and gynaecology). In many areas, the specialities of gynaecology and obstetrics overlap. The term means "the science of women".[1] Its counterpart is andrology, which deals with medical issues specific to the male reproductive system.</p>
                                <p>Gynaecology or gynecology is the medical practice dealing with the health of the female reproductive system. Almost all modern gynaecologists are also obstetricians. In many areas, the specialities of gynaecology and obstetrics overlap. The term means "the science of women".</p>

                                <h2 className="py-3" style={{ color: "#2184BB" }}>Types of Dental Surgeon</h2>
                                <ol>
                                    <h4 style={{ color: "#2184BB" }}><li>Obstetrician gynecologist</li></h4>
                                    <p>An obstetrician-gynecologist or OB-GYN is an expert who specializes in pregnancy and delivery. Ideally, you should visit an OB-GYN even before you get pregnant as the doctor can prescribe the necessary tests and supplements you need when you are trying to conceive. Then, you can continue to go for antenatal checkup (ANC) during pregnancy. An OB-GYN can perform surgery and assist in labor and delivery. This gynaec is the one to seek for issues during and after pregnancy such as:
                                    </p>
                                    <ul className="py-3">
                                        <li>Gestational high blood pressure</li>
                                        <li>Gestational diabetes</li>
                                        <li>Premature labour</li>
                                        <li>Pre-eclampsia</li>
                                        <li>Prenatal tests</li>
                                    </ul>

                                    <h4 style={{ color: "#2184BB" }}><li>IVF Specialist</li></h4>
                                    <p>In-vitro fertilization (IVF) is a process in which an embryo is fertilized in a lab and then transferred into a woman’s womb. So if you are suffering from hormonal problems that interfere with your pregnancy or are unable to conceive due to structural problems but wish to become pregnant, then an IVF specialist is the right expert to consult</p>


                                    <h4 style={{ color: "#2184BB" }}><li>Urogynaecologists</li></h4>
                                    <p>They are the experts who specialize in diagnosing and treating problems associated with the urinary tract and pelvic floor. The pelvic floor acts as a supporting structure for the uterus, vagina, rectum and bladder. They are also responsible for performing reconstructive surgery to treat the disorder. Common diseases for which you may visit a urogynaecologist include</p>
                                    <ul>
                                        <li>Urinary tract infections (UTIs)</li>
                                        <li>Urinary incontinence</li>
                                        <li>Premature labour</li>
                                        <li>Pre-eclampsia</li>
                                        <li>Prenatal tests</li>
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

export default Gynaecologist;