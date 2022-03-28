import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { NavLink, useHistory, useParams } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";
import Ratings from "./Ratings";

const DoctorModal = () => {

  var LoggedInUser;
  const history = useHistory();

  // FETCHING DOCTOR WITH HELP OF ID
  const [doctor, setDoctor] = useState([]);

  const appointmentId = useParams();
  var doctorName = localStorage.getItem("doctorName");
  console.log(doctorName);


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
        // console.log("Logged In User:",data.name);
        // console.log("LOgin data aaja bhai",data);

        LoggedInUser = data.name;
        localStorage.setItem("patientName", data.name);

        // if(data.name === setFetchReview.pname) {
        //     console.log("This is equal");
        // } else {
        //     console.log("it is not equal");
        // }

    } catch (error) {
        console.log(error);
    }
  }

  var PatientName = localStorage.getItem("patientName");

  localStorage.setItem("doctorName", doctor.name);
  var LName = doctor.name;

  // BOOK APPOINTMENT
  const [appointment, setAppointment] = useState({
    pname: PatientName,
    doctor: doctorName,
    priority: "",
    date: "",
    time: "",
    mode: "",

  });

console.log(doctor);



  // FETCHING DOCTOR WITH HELP OF ID
  const getDoctorDetailsById = async () => {
    try {
        // console.log(doctorId);
        const res = await fetch(`http://localhost:5000/doctorSearch/bookAppointment/${appointmentId.appointmentId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const getDoctorDetails = await res.json();
        // console.log(getDoctorDetails);
        setDoctor(getDoctorDetails);
        // setReviews(getDoctorDetails.review)

        if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
        }

    } catch (error) {
        console.log(error);
    }
}

  // 
  let name, value;
  const handleInputs = (e) => {
      e.preventDefault();

      name = e.target.name;
      value = e.target.value;

    setAppointment({ ...appointment, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { pname, doctor, priority, date, time, mode } = appointment;

    const res = await fetch("/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pname,
        doctor,
        priority,
        date,
        time,
        mode,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Please Select Another Slot!");
      console.log("Please Select Another Slot!");
    } else {
      window.alert("Appointment Booked Successfully");
      console.log("Appointment Booked Successfully");

      history.push("/");
    }
  };

  

  useEffect(() => {
    getDoctorDetailsById();
    patientLoggedIn();
  }, []);

  let date = new Date();
  let today = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrow = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrowplus1 = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrowplus2 = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrowplus3 = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrowplus4 = date.toDateString();

  date.setDate(date.getDate() + 1);
  let tomorrowplus5 = date.toDateString();

  return (
    <>
        <Navbar />
            <div className="container">
                <div className="content-box-md">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <SectionHeader title="Rate Doctor" />
                                <div className="rating-review-wrapper m-4">
                                    <form>
                                        <div class="mb-3">
                                            <label for="InputDesignation" class="form-label">Patient Name</label>
                                            <input disabled type="text" class="form-control" name="pname" id="pname" value={PatientName} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="InputDesignation" class="form-label">Doctor Select</label>
                                            <select name="name" id="name" onChange={handleInputs} class="form-control">
                                                <option value="--select--">-- Select Doctors --</option>
                                                <option value={doctor.name}>{doctor.name}</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="selectpriority" class="form-label">Type of Appointment</label>
                                            <select class="form-select" aria-label="Doctor Select" id="priority" name="priority" value={appointment.priority} onChange={handleInputs} >
                                                <option selected>Select the Type</option>
                                                <option value="Follow Up">Follow Up</option>
                                                <option value="Initial Checkup">Initial Checkup</option>
                                                <option value="Brief Checkup">Brief Checkup</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="selectdate" class="form-label">Date Select</label>
                                            <select class="form-select" aria-label="Doctor Select" id="date" name="date" value={appointment.date}  onChange={handleInputs}>
                                            <option value="">-- Select Date --</option>
                                                <option value={today}>{today}</option>
                                                <option value={tomorrow}>{tomorrow}</option>
                                                <option value={tomorrowplus1}>{tomorrowplus1}</option>
                                                <option value={tomorrowplus2}>{tomorrowplus2}</option>
                                                <option value={tomorrowplus3}>{tomorrowplus3}</option>
                                                <option value={tomorrowplus4}>{tomorrowplus4}</option>
                                                <option value={tomorrowplus5}>{tomorrowplus5}</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="selecttime" class="form-label">Time Select</label>
                                            <select class="form-select" aria-label="Doctor Select" id="time" name="time" value={appointment.time} onChange={handleInputs} >
                                                <option selected>Select the Time</option>
                                                <option value="10:00">10:00</option>
                                                <option value="11:00">11:00</option>
                                                <option value="12:00">12:00</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="selectmode" class="form-label">Mode Select</label>
                                            <select class="form-select" aria-label="Doctor Select" id="mode" name="mode" value={appointment.mode} onChange={handleInputs}>
                                                <option selected>Select the Mode</option>
                                                <option value="Video">Video</option>
                                                <option value="Inplace">Inplace</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mt-5">
                                          <button type="submit" className="btn btn-primary px-5" id="book" name="book" onClick={PostData}>Book</button>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default DoctorModal;
