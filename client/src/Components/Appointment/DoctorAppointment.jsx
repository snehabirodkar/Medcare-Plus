import React, { useState, useEffect } from 'react'
import SectionHeader from '../SectionHeader';
import { useHistory } from "react-router-dom";

import "./appointment.css"

const DoctorAppointment = () => {
    const history = useHistory();
    var appointmentData = "";

    // FETCHING DATA FROM DB
    const [appointment, setAppointment] = useState([]);

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
            // console.log("Doctor Logged In:",data);
            appointmentData = data;
            localStorage.setItem("doctorName", data.name);
            // console.log("Appointment Data new:",appointmentData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push("/doctor/login");
        }
    }

    // FETCHING DOCTOR APPOINTMENT
    const getDoctorData = async () => {
        try {
            const res = await fetch("/getDoctorAppointment", {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            });
            const getDoctor = await res.json();
            // console.log("Patients Appointmet:",getPatient);
            setAppointment(getDoctor);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        doctorMiddleware();
        getDoctorData();
    }, []);
    var itemIndex =1;

    return (
        <>
            <section id="patient-appointment-section">
                <form method="GET">
                    <div className="container-fluid">
                        <div className="content-box-md">
                            <div className="row">
                                <div className="col-md-10 col-sm-3 mx-auto">
                                    <div className="row">
                                        <SectionHeader title="Doctor Appointment" />
                                        <div className="col-md-12 col-xs-5 mx-auto">
                                            <div className="row">
                                                <div className="col-md-12 mx-auto">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        {
                                                            appointment.map((item, index) => {
                                                                {
                                                                    console.log("Map data", item);
                                                                }
                                                                if (item.doctor == localStorage.getItem("doctorName")) {
                                                                    localStorage.setItem("prescriptionPatientName"+itemIndex, item.pname);
                                                                    itemIndex = itemIndex + 1;
                                                                    localStorage.setItem("prescriptionDoctorName", item.doctor);
                                                                    var hrefLink = "/doctor/prescription/" + item.pname;
                                                                    return ( 
                                                                        <>
                                                                            <div className="approval-card" key={index}>
                                                                                <h4 className="patient-name mb-4">Doctor: {item.doctor}</h4>
                                                                                <p className="approved">Patient Name: {item.pname}</p>
                                                                                <p className="experience">
                                                                                    Priority: {item.priority}
                                                                                </p>
                                                                                <p className="designation">
                                                                                    Date: {item.date}
                                                                                </p>
                                                                                <p className="location">Time: {item.time} </p>
                                                                                <p className="location">Mode: {item.mode} </p>
                                                                                <hr />
                                                                                <a className="btn btn-success" href="https://medcareplus-video.netlify.app/" target="_blank">Video Call</a>
                                                                                <a className="btn btn-primary mx-2" href={hrefLink}>Give Prescription</a>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default DoctorAppointment
