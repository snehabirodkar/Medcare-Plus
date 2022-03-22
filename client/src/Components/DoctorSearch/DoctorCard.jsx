import React, { useState, useEffect, useContext } from "react";
// import * as React from 'react';
import { Slider } from "@material-ui/core";
import "../../helper.css";
import "./DoctorCard.css";
import harshpatel from "../../Assets/Images/doctor-image/harsh-patel.png";
import { NavLink, useHistory, useParams } from "react-router-dom";
import Ratings from "./Ratings";
import { UserContext } from "../../App";
import Navbar from "../NavigationBar/Navbar";

const DoctorCard = ({ search }) => {

  function valuetext(value) {
    return `${value}°C`;
  }

  const { dispatch } = useContext(UserContext);
  const { match } = useParams;

  const history = useHistory();

  // fetching data from db
  const [doctors, setDoctors] = useState([]);

  // filter Data
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // BOOK APPOINTMENT
  const [appointment, setAppointment] = useState({
    pname: "",
    doctor: "",
    priority: "",
    date: "",
    time: "",
    mode: "",
  });



  // MIDDLEWARE
  const callDoctorSearch = async () => {
    try {
      const res = await fetch("/doctorSearch", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  // FETCHING DOCTOR
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/getData", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const getDoctors = await res.json();
      // console.log(getDoctors);
      setDoctors(getDoctors);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // SEARCH FILTER DOCTOR
  const inputEvent = (e) => {
    setFilteredDoctors(
      doctors.filter(
        ({ name, designation }) =>
          name.toLowerCase().includes(search.toLowerCase()) ||
          designation.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // GETTING CURRENT USER WHICH IS LOGGED IN
  const userLoggedIn = async () => {
    try {
      const res = await fetch('/getCurrentUser', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      // console.log("LOgin data aaja bhai",data);

      setAppointment({ ...appointment, pname: data.name });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  // BOOK APPOINTMENT
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setAppointment({ ...appointment, [name]: value });
  };

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
    userLoggedIn();
    callDoctorSearch();
    getData();
    inputEvent();

  }, [search]);

  const context = filteredDoctors.length <= 0 ? doctors : filteredDoctors;

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
      <div className="mx-auto">
        <form method="GET">
          {context &&
            context.map((item, index) => (
              <div className="search-wrapper m-3 mb-5">
                <div className="left-container">
                  <div className="doc-image">
                    <img src={harshpatel} alt="" />
                  </div>
                  <div className="details px-5 my-auto pt-2">
                    <h4 className="doctor-name">{item.name}</h4>
                    {/* <p className="experience">ID: {item._id}</p> */}
                    <p className="experience">
                      Years of Experience: {item.experience}
                    </p>
                    <p className="designation">
                      Designation: {item.designation}
                    </p>
                    <p className="location">Location/office: {item.location}</p>
                    <p className="consultant-fees mb-0">
                      Fees: Rs. 1000 in Clinic
                    </p>

                    {/* <p className="mb-1 mt-1">
                      <Ratings value={item.ratings} />
                    </p> */}
                  </div>
                </div>
                <hr />
                <div className="right-container my-auto mx-auto">
                  <p>Pricing: Free Booking</p>
                  <div className="btn-container mt-2">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Book an Appointment
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div
                          className="modal-content"
                          style={{ height: "80vh" }}
                        >
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Book an Appointment
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form method="POST">
                              <div class="mb-1 mx-3">
                                <label for="patientname" class="form-label">
                                  Patient Name
                                </label>
                                <input disabled
                                  type="text"
                                  class="form-control"
                                  id="pname"
                                  placeholder="eg: John Doe"
                                  name="pname"
                                  value={appointment.pname}
                                  onChange={handleInputs}
                                />
                              </div>

                              <div class="mb-1 mx-3">
                                <label for="selectdoctor" class="form-label">
                                  Doctor Select
                                </label>
                                <select
                                  class="form-select"
                                  aria-label="Doctor Select"
                                  id="doctor"
                                  name="doctor"
                                  value={appointment.doctor}
                                  onChange={handleInputs}
                                >
                                  <option selected>
                                    Select the Doctor
                                  </option>
                                  {doctors.map((item, index) => (
                                    <option value={item.name}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div class="mb-1 mx-3">
                                <label for="selectpriority" class="form-label">
                                  Priority Select
                                </label>
                                <select
                                  class="form-select"
                                  aria-label="Doctor Select"
                                  id="priority"
                                  name="priority"
                                  value={appointment.priority}
                                  onChange={handleInputs}
                                >
                                  <option selected>
                                    Select the Priority
                                  </option>
                                  <option value="Follow Up">Follow Up</option>
                                  <option value="Initial Checkup">
                                    Initial Checkup
                                  </option>
                                  <option value="Brief Checkup">
                                    Brief Checkup
                                  </option>
                                </select>
                              </div>

                              <div class="mb-1 mx-3">
                                <label for="selectdate" class="form-label">
                                  Date Select
                                </label>
                                <select
                                  class="form-select"
                                  aria-label="Doctor Select"
                                  id="date"
                                  name="date"
                                  value={appointment.date}
                                  onChange={handleInputs}
                                >
                                  <option>
                                    Select the Date
                                  </option>
                                  <option value={today}>{today}</option>
                                  <option value={tomorrow}>{tomorrow}</option>
                                  <option value={tomorrowplus1}>{tomorrowplus1}</option>
                                  <option value={tomorrowplus2}>{tomorrowplus2}</option>
                                  <option value={tomorrowplus3}>{tomorrowplus3}</option>
                                  <option value={tomorrowplus4}>{tomorrowplus4}</option>
                                  <option value={tomorrowplus5}>{tomorrowplus5}</option>
                                </select>
                              </div>

                              <div class="mb-1 mx-3">
                                <label for="selecttime" class="form-label">
                                  Time Select
                                </label>
                                <select
                                  class="form-select"
                                  aria-label="selecttime"
                                  id="time"
                                  name="time"
                                  value={appointment.time}
                                  onChange={handleInputs}
                                >
                                  <option selected>
                                    Select the Time
                                  </option>
                                  <option value="10:00">10:00</option>
                                  <option value="11:00">11:00</option>
                                  <option value="12:00">12:00</option>
                                </select>
                              </div>

                              <div class="mb-1 mx-3">
                                <label for="selectmode" class="form-label">
                                  Mode Select
                                </label>
                                <select
                                  class="form-select"
                                  aria-label="selectmode"
                                  id="mode"
                                  name="mode"
                                  value={appointment.mode}
                                  onChange={handleInputs}
                                >
                                  <option selected>
                                    Select the Mode
                                  </option>
                                  <option value="Video">Video</option>
                                  <option value="Inplace">Inplace</option>
                                </select>
                              </div>

                              <div className="modal-footer text-center d-flex justify-content-center">
                                <button
                                  type="submit"
                                  className="btn btn-primary px-5"
                                  id="book"
                                  name="book"
                                  onClick={PostData}
                                >
                                  Book
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-container mt-2">
                    <NavLink class="btn btn-primary" to={`/doctorsearch/${item._id}`}>Review Doctor</NavLink>
                  </div>
                </div>
              </div>
            ))}
        </form>
      </div>
    </>
  );
};

export default DoctorCard;
