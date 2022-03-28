import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import emailjs from 'emailjs-com';
import Navbar from "../NavigationBar/Navbar";

const Prescription = () => {

    var email = "";
    const param = useParams();
    console.log(param);
    var doctorName = localStorage.getItem("cuser");

    var today = new Date();
    today = today.toDateString();
    // console.log(today);

    const history = useHistory();

    const [patientData, setPatientData] = useState([]);

    // ADDING PRESCRIPTION IN DB
    const [prescriptionData, setPrescriptionData] = useState({
        dname: doctorName, pname: param.patientname, date: today, diagnosis: "", 
        prescriptions: ""
    });
    
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

    // ADDING PRESCRIPTION IN DATABASE
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(name);
        console.log(value);

        setPrescriptionData({ ...prescriptionData, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
    
        const { dname, pname, date, diagnosis, prescriptions } = prescriptionData;
    
        const res = await fetch("/prescription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dname,
            pname,    
            date,
            diagnosis,
            prescriptions
          }),
        });
    
        const data = await res.json();
        console.log(data);
    
        if (res.status === 422 || !data) {
          window.alert("Invalid Details");
          console.log("Invalid Details");
        } else {
            submitPrescription(e);
          window.alert("Prescription Sent Successfully");
          console.log("Prescription Sent Successfully");
    
          history.push("/doctor/dashboard");
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
        emailjs.sendForm('service_iahndb7', 'template_tlgrcai', e.target, 'user_zfai6BIAv43mG08ahqiQr').then(res => {
            // alert("Prescription Sent !");
            console.log(res);
        }).catch(err => console.log(err));
    }


    return (
        <>
            <Navbar />
            <section id="pharmacy">
                <div className="container">
                    <div className="content-box-sm">
                        <SectionHeader title="Doctor's Prescription" />
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <form onSubmit={PostData }>
                                    <div className="mb-2">
                                        <label for="doctorName" className="pb-2">Doctor Name</label>
                                        <input name="doctorname" type="text" className="form-control" id="doctorName" value={doctorName}  />
                                    </div>
                                    <div className="mb-2">
                                        <label for="patientName" className="pb-2">Patient Name</label>
                                        <input name="patientname" type="text" className="form-control" id="patientName" value={param.patientname} />
                                    </div>
                                    
                                    {
                                        patientData.map((item, index) => {
                                            if (item.name == param.patientname) {
                                                email = item.email;
                                                return (
                                                    <>
                                                        <div className="mb-2">
                                                            <label for="patientEmail" className="pb-2">Patient Email</label>
                                                            <input name="patientemail" type="text" className="form-control" id="patientEmail" value={item.email} />
                                                        </div>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                    <div className="mb-2">
                                        <label for="patientName" className="pb-2">Date</label>
                                        <input disabled name="patientname" type="text" className="form-control" id="patientName" value={today} />
                                    </div>
                                    <div className="mb-2">
                                        <label for="diagnosis" className="pb-2">Diagnosis</label>
                                        <textarea name="diagnosis" id="diagnosis" className="form-control" value={prescriptionData.diagnosis}
                                            onChange={handleInputs}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label for="prescriptions" className="pb-2">Prescription</label>
                                        <textarea name="prescriptions" id="prescriptions" className="form-control" onChange={handleInputs} value={prescriptionData.prescriptions}
                                        />
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