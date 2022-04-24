const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const adminAuthenticate = require("../middleware/adminAuthenticate");
const doctorAuthenticate = require("../middleware/doctorAuthenticate");
const mongoose = require("mongoose");

require("../db/conn");
const Patient = require("../model/patientSchema");
const Doctor = require("../model/doctorSchema");
const Admin = require("../model/adminSchema");
const Appointment = require("../model/appointmentSchema");
const Review = require("../model/reviewSchema");
const Forum = require("../model/forumSchema");
const Prescription = require("../model/prescriptionSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server route.js`);
});

// PATIENT REGISTRATION
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, aadhar, age, email, password, cpassword } = req.body;

  if (!name || !aadhar || !age || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const emailExist = await Patient.findOne({ email: email });
    if (emailExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }
    if (age < 18) {
      return res.status(422).json({ error: "Age is less than 18" });
    }

    const patient = new Patient({
      name,
      aadhar,
      age,
      email,
      password,
      cpassword,
    });

    await patient.save();

    res.status(201).json({ message: "Patient Registered Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// PATIENT LOGIN
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await Patient.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.json({ Message: "Patient Signin Successfully" });
      } else {
        res.status(400).json({ Error: "Invalid Credentails" });
      }
    } else {
      res.status(400).json({ Error: "Invalid Credentails" });
    }
  } catch (error) {
    console.log(error);
  }
});

// DOCTOR REGISTRATION
router.post("/doctorRegister", async (req, res) => {
  // console.log(req.body);
  const {
    user,
    name,
    aadhar,
    age,
    email,
    designation,
    experience,
    phone,
    location,
    image,
    password,
    approved,
    numReviews,
  } = req.body;

  if (
    !name ||
    !aadhar ||
    !age ||
    !email ||
    !designation ||
    !experience ||
    !phone ||
    !location ||
    !image ||
    !password
  ) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const emailExist = await Doctor.findOne({ email: email });
    if (emailExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    const phoneExist = await Doctor.findOne({ phone: phone });
    if (phoneExist) {
      return res.status(422).json({ error: "Phone already Exist" });
    }
    if (age < 18) {
      return res.status(422).json({ error: "Age is less than 18" });
    }

    const doctor = new Doctor({
      user,
      name,
      aadhar,
      age,
      email,
      designation,
      experience,
      phone,
      location,
      image,
      password,
      approved,
      numReviews,
    });

    await doctor.save();

    res.status(201).json({ message: "Doctor Registered Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// DOCTOR LOGIN
router.post("/doctorSignin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await Doctor.findOne({ email: email });

    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.status(201).json({ Message: "Doctor Signin Successfully" });
      } else {
        res.status(400).json({ Error: "Invalid Credentails" });
      }
    } else {
      res.status(400).json({ Error: "Invalid Credentails" });
    }
  } catch (error) {
    console.log(error);
  }
});

// ADMIN REGISTRATION
router.post("/adminRegister", async (req, res) => {
  // console.log(req.body);
  const { id, name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const idExist = await Admin.findOne({ id: id });
    if (idExist) {
      return res.status(422).json({ error: "ID already Exist" });
    }
    const emailExist = await Admin.findOne({ email: email });
    if (emailExist) {
      return res.status(422).json({ error: "Email already Exist" });
    }

    const admin = new Admin({ id, name, email, password, cpassword });

    await admin.save();

    res.status(201).json({ message: "Admin Registered Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// ADMIN LOGIN
router.post("/adminSignin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const adminLogin = await Admin.findOne({ email: email });

    // console.log(adminLogin);

    if (adminLogin) {
      const isMatch = await bcrypt.compare(password, adminLogin.password);

      token = await adminLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.status(201).json({ Message: "Admin Signin Successfully" });
      } else {
        res.status(400).json({ Error: "Invalid Credentails" });
      }
    } else {
      res.status(400).json({ Error: "Invalid Credentails" });
    }
  } catch (error) {
    console.log(error);
  }
});

// DOCTOR SEARCH PAGE MIDDLEWARE
router.get("/doctorSearch", authenticate, (req, res) => {
  // console.log(`hello my serach`);
  // console.log(req.rootUser);
});

// APPROVED PAGE MIDDLEWARE
router.get("/admin/doctorapproval", adminAuthenticate, (req, res) => {
  // console.log(`hello my admin`);
  // console.log(req.rootUser);
});

// FETCHING DOCTOR DATA
router.get("/getData", async (req, res) => {
  try {
    const doctors = await Doctor.find({
      approved: { $eq: 1 },
    });
    return res.json(doctors);
  } catch (err) {
    return res.json(err);
  }
});

// FETCHING DOCTOR DATA IN APPROVAL
router.get("/getApprovalData", async (req, res) => {
  try {
    const approvalDoctor = await Doctor.find();
    return res.json(approvalDoctor);
  } catch (err) {
    return res.json(err);
  }
});

// LOGOUT KA PAGE
router.get("/logout", (req, res) => {
  // console.log(`Hello logout page here`); // iske pehle middleware chalta h phir about chalega
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send(`User Logout`);
});

// DOCTOR APPROVAL
router.put("/approve", async (req, res) => {
  try {
    const approveDoc = await Doctor.updateOne(
      { _id: req.body.id },
      { $set: { approved: 1 } }
    );

    res.status(204).json({
      msg: "Doctor Approved",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// DELETE DOCTOR DATA IF CLICK ON DECLINE
router.delete("/delete", async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.body.id);

  if (doctor) {
    await doctor.remove();
    res.status(204).json({ message: "Doctor Removed" });
  } else {
    res.status(404);
    throw new Error("Doctor Not Found");
  }
});

// BOOK APPOINTMENT
router.post("/appointment", async (req, res) => {
  // console.log(req.body);
  const { pname, doctor, priority, date, time, mode } = req.body;

  if (!pname || !doctor || !priority || !date || !time || !mode) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const docExist = await Appointment.findOne({
      doctor: req.body.doctor,
      time: req.body.time,
      date: req.body.date,
    });
    if (docExist) {
      res.status(422).json({ error: "Please Select another slot!" });
    } else {
      const appointment = new Appointment({
        pname,
        doctor,
        priority,
        date,
        time,
        mode,
      });

      await appointment.save();

      res.status(201).json({ message: "Appointment Booked Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// FETCHING APPOINTMENT DATA FOR PATIENT
router.get("/getPatientAppointment", async (req, res) => {
  try {
    const approvalPatient = await Appointment.find();
    return res.json(approvalPatient);
  } catch (err) {
    return res.json(err);
  }
});

// FETCHING CURRENT USER LOGGED IN
router.get("/getCurrentUser", authenticate, (req, res) => {
  // console.log("Just some");
  res.send(req.rootUser);
  // console.log(req.rootUser);
});

// MIDDLEWARE FOR PATIENT APPOINTMENT
router.get("/getPatientMiddleware", authenticate, (req, res) => {
  // console.log("Logged In with Patient Appointment");
  res.send(req.rootUser);
  // console.log(req.rootUser);
});

// MIDDLEWARE FOR DOCTOR APPOINTMENT
router.get("/getDoctorMiddleware", doctorAuthenticate, (req, res) => {
  // console.log("Logged In with Doctor Appointment");
  res.send(req.rootUser);
  // console.log(req.rootUser);
});

// FETCHING APPOINTMENT DATA FOR DOCTOR
router.get("/getDoctorAppointment", async (req, res) => {
  try {
    const approvalDoctor = await Appointment.find();
    return res.json(approvalDoctor);
  } catch (err) {
    return res.json(err);
  }
});

// FETCHING PATIENT DATA WITH NAME
router.get("/getPatientData", async (req, res) => {
  try {
    const patientDetails = await Patient.find();
    return res.json(patientDetails);
  } catch (err) {
    return res.json(err);
  }
});

// FETCHING DOCTOR WITH THE HELP OF ITS ID
router.get("/doctorSearch/:id", async (req, res) => {
  try {
    const doctorRate = await Doctor.findById(req.params.id);
    // console.log(doctorRate);

    if (doctorRate) {
      res.json(doctorRate);
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// REVIEW DOCTOR
router.post("/doctorSearch/reviews", async (req, res) => {
  const { pname, name, rating, comment } = req.body;

  console.log(req.body);

  if (!pname || !name || !rating || !comment) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
  if (rating > 5) {
    return res.status(422).json({ error: "Plz Rate properly" });
  }

  try {
    const ratingExist = await Review.findOne({ rating: rating });
    const commentExist = await Review.findOne({ comment: comment });

    const review = new Review({ pname, name, rating, comment });
    console.log(review);
    await review.save();

    res.status(200).json({ message: "You have Reviewed Doctor Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// FETCH REVIEW AND RATING
router.get("/getDoctorReview", async (req, res) => {
  try {
    const doctorReview = await Review.find();
    return res.json(doctorReview);
  } catch (err) {
    return res.json(err);
  }
});

// FORUM DATA STORE
router.post("/forum", async (req, res) => {
  console.log(req.body);
  const { title, introduction, imageLink, body, date } = req.body;

  if (!title || !introduction || !imageLink || !body || !date) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const forum = new Forum({
      title,
      introduction,
      imageLink,
      body,
      date,
    });

    await forum.save();

    res.status(201).json({ message: "Blog Posted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// FETCH FORUM DATA
router.get("/getForum", async (req, res) => {
  try {
    const forumData = await Forum.find();
    return res.json(forumData);
  } catch (err) {
    return res.json(err);
  }
});

// FETCHING DOCTOR APPOINTMENT WITH THE HELP OF ITS ID
router.get("/doctorSearch/bookAppointment/:id", async (req, res) => {
  try {
    const doctorRate = await Doctor.findById(req.params.id);
    // console.log(doctorRate);

    if (doctorRate) {
      res.json(doctorRate);
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

// PRESCRIPTION DATA STORE
router.post("/prescription", async (req, res) => {
  console.log(req.body);
  const { dname, pname, date, diagnosis, prescriptions } = req.body;

  if (!diagnosis || !prescriptions) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const prescriptionPage = new Prescription({
      dname,
      pname,
      date,
      diagnosis,
      prescriptions,
    });

    await prescriptionPage.save();

    res.status(201).json({ message: "Blog Posted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

// FETCHING PRESCRIPTION DATA
router.get("/getPrescription", async (req, res) => {
  try {
    const prescriptionData = await Prescription.find();
    return res.json(prescriptionData);
  } catch (err) {
    return res.json(err);
  }
});

// CANCEL APPOINTMENT
router.delete("/cancelAppointment", async (req, res) => {
  const cancel = await Appointment.findByIdAndDelete(req.body.id);

  if (cancel) {
    await cancel.remove();
    res.status(204).json({ message: "Appointment Removed" });
  } else {
    res.status(404);
    throw new Error("Appointment Not Found");
  }
});

module.exports = router;
