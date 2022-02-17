import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import emailjs from 'emailjs-com';

const Prescription = () => {

    const param = useParams();
    // console.log(param);
    var doctorName = localStorage.getItem("prescriptionDoctorName");

    const [patientData, setPatientData] = useState([]);

    // FETCHING PATIENT
    const getData = async () => {
        try {
            const res = await fetch("http://localhost:5000/getPatientData", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getPatient = await res.json();
            console.log(getPatient);
            setPatientData(getPatient);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // var prescriptionBtn = document.getElementById('prescription');
    // prescriptionBtn.addEventListener('submit', submitPrescription);

    const submitPrescription = (e) => {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_iahndb7', 'template_tlgrcai', e.target, 'user_zfai6BIAv43mG08ahqiQr').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }


    // const submitPrescription = (e) => {
    //     e.preventDefault();
    //     const Dname = doctorName;
    //     const Pname = param.patientname;
    //     const email = document.getElementById('patientEmail').value;
    //     const diagnosis = document.getElementById('patientDiagnosis').value;
    //     const prescription = document.getElementById('patientDiagnosis').value;
    //     // sendEmailPrescription(Dname, Pname, email, diagnosis, prescription);
    // }

    // const sendEmailPrescription = (Dname, Pname, email, diagnosis, prescription) => {
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "contact.medcareplus@gmail.com",
    //         Password: "nuurinkxxvkabrfj",
    //         To: email,
    //         From: "contact.medcareplus@gmail.com",
    //         Subject: `${Dname} from MedcarePlus has sent you your prescription`,
    //         Body: `<h1>Hey ${Pname},</h1><h3>${Dname} has sent you your prescription!<h3/><p>Here are the details:</p><br/><b>Diagnosis's:</b> ${diagnosis}<br/> <b>Prescription:</b> ${prescription}<br/>`
    //     }).then((message) => alert("Mail Sent successfully"));
    // }

    // document.querySelector(".contact-designer").addEventListener("submit", submitMailDesigner);

    // function submitMailDesigner(e) {
    //   e.preventDefault();
    //   const name = document.querySelector(".mail-name").value;
    //   const email = document.querySelector(".mail-email").value;
    //   const phone = document.querySelector(".mail-phone").value;
    //   const message = document.querySelector(".mail-message").value;
    //   const designer = document.querySelector(".mail-designer-intrested").value;
    //   sendEmailDesigner(name, email, phone, message, designer);
    // }

    // function sendEmailDesigner(name, email, phone, message, designer) {
    //   Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "contact.propakith@gmail.com",
    //     Password: "shpbbkamusfikjwx",
    //     To: 'contact.propakith@gmail.com',
    //     From: "contact.propakith@gmail.com",
    //     Subject: `${name} sent you a query for designer`,
    //     Body: `<h1>Hey Propakith,</h1><h3>${name} wants to get in touch!<h3/><p>Here are the details:</p><br/><b>Client's Name:</b> ${name}<br/> <b>Client's Email:</b> ${email}<br/> <b>Client's Phone Number:</b> ${phone}<br/><b>Client's Interest in Designer:</b> ${designer} <br/><b>Client's Message:</b> ${message}`
    //   }).then((message) => alert("Mail Sent successfully"));
    // }

    return (
        <>
            <section id="pharmacy">
                <div className="container">
                    <div className="content-box-sm">
                        <SectionHeader title="Doctor's Prescription" />
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <form onSubmit={submitPrescription}>
                                    <div className="mb-2">
                                        <label for="doctorName" className="pb-2">Doctor Name</label>
                                        <input name="doctorname" type="text" className="form-control" id="doctorName" value={doctorName} />
                                    </div>
                                    <div className="mb-2">
                                        <label for="patientName" className="pb-2">Patient Name</label>
                                        <input name="patientname" type="text" className="form-control" id="patientName" value={param.patientname} />
                                    </div>
                                    {
                                        patientData.map((item, index) => {
                                            if (item.name == param.patientname) {
                                                return (
                                                    <>
                                                        <div className="mb-2">
                                                            <label for="patientEmail" className="pb-2">Patient Email</label>
                                                            <input name="patientemail" type="text" className="form-control" id="patientEmail" value={item.email}     />
                                                        </div>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                    <div className="mb-2">
                                        <label for="patientDiagnosis" className="pb-2">Diagnosis</label>
                                        <textarea name="patientdiagnosis" id="patientDiagnosis" className="form-control"/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="patientPrescription" className="pb-2">Prescription</label>
                                        <textarea name="patientprescription" id="patientPrescription" className="form-control"/>
                                    </div>
                                    <input id="prescription" type="submit" className="btn btn-primary w-100" value="Give Prescription"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Prescription;