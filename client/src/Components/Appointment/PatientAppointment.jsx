import React, { useState, useEffect } from 'react'
import SectionHeader from '../SectionHeader';
import { useHistory } from "react-router-dom";

import "./appointment.css"

const PatientAppointment = () => {
    const history = useHistory();
    var appointmentData = "";

    // FETCHING DATA FROM DB
    const [appointment, setAppointment] = useState([]);

    // MIDDLEWARE
    const patientMiddleware = async () => {
        try {
            const res = await fetch("/getPatientMiddleware", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();
            appointmentData = data;
            localStorage.setItem("patientName", data.name);
            // console.log("Appointment Data new:",appointmentData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push("/login");
        }
    };

    // FETCHING PATIENT APPOINTMENT
    const getPatientData = async () => {
        try {
            const res = await fetch("/getPatientAppointment", {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            });
            const getPatient = await res.json();
            // console.log("Patients Appointmet:",getPatient);
            setAppointment(getPatient);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    // CURRENT PATIENT/USER WHICH IS LOGGED IN
    const patientLoggedIn = async () => {
        try {
            const res = await fetch('/getCurrentUser', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log("Logged In User:",data);
            // console.log("LOgin data aaja bhai",data);

            if (data.name === setAppointment.pname) {
                console.log("This is equal");
            } else {
                console.log("it is not equal");
            }

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        patientMiddleware();
        patientLoggedIn();
        getPatientData();
    }, []);
    var currentTime = new Date();

    return (
        <>
            <section id="patient-appointment-section">
                <form method="GET">
                    <div className="container-fluid">
                        <div className="content-box-md">
                            <div className="row">
                                <div className="col-md-10 col-sm-3 mx-auto">
                                    <div className="row">
                                        <SectionHeader title="Patient Appointment" />
                                        <div className="col-md-12 col-xs-5 mx-auto">
                                            <div className="row">
                                                <div className="col-md-12 mx-auto">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        {
                                                            appointment.map((item, index) => {
                                                                // {
                                                                //     console.log("Patient name=",appointmentData);
                                                                // }
                                                                if (item.pname == localStorage.getItem("patientName")) {
                                                                    if (item.date) {
                                                                        console.log(item.date);
                                                                        var oldDate = new Date(item.date);
                                                                        console.log("o" + oldDate.getDate());
                                                                        console.log("c" + currentTime.getDate());
                                                                        if (currentTime.getDate() <= oldDate.getDate()) {
                                                                            console.log("valid");
                                                                            return (
                                                                                <>
                                                                                    <div className="approval-card" key={index}>
                                                                                        <h4 className="patient-name mb-4">Patient Name: {item.pname}</h4>
                                                                                        <p className="approved">Doctor: {item.doctor}</p>
                                                                                        <p className="experience">
                                                                                            Priority: {item.priority}
                                                                                        </p>
                                                                                        <p className="designation">
                                                                                            Date: {item.date}
                                                                                        </p>
                                                                                        <p className="location">Time: {item.time} </p>
                                                                                        <p className="location">Mode: {item.mode} </p>
                                                                                        <hr />
                                                                                        <a className="btn btn-primary w-100" href="https://medcareplus-video.netlify.app/" target="_blank">Video Call</a>
                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        }
                                                                    }
                                                                    
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

export default PatientAppointment;
