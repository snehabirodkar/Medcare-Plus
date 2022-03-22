import React, { createContext, useReducer } from 'react'
import { Switch, Route } from "react-router";
import { useParams, Routes } from 'react-router-dom';
import AdminApproval from "./Components/Admin/AdminApproval";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegistration from './Components/Admin/AdminRegistration';
import AmbulanceList from "./Components/Ambulance/AmbulanceList";
import DoctorAppointment from './Components/Appointment/DoctorAppointment';
import PatientAppointment from './Components/Appointment/PatientAppointment';
import DoctorLogin from "./Components/DoctorLoginRegistration/DoctorLogin";
import DoctorRegistration from "./Components/DoctorLoginRegistration/DoctorRegistration";
import DoctorSearch from "./Components/DoctorSearch/DoctorSearch";
import HomePage from "./Components/Home/HomePage";
import Login from './Components/LoginRegistration/Login';
import Logout from "./Components/LoginRegistration/Logout";
import Registration from './Components/LoginRegistration/Registration';
import Navbar from './Components/NavigationBar/Navbar';
import Dentist from "./Components/Proffession/Dentist";
import Dietitian from "./Components/Proffession/Dietitian";
import Ent from "./Components/Proffession/Ent";
import Gynaecologist from "./Components/Proffession/Gynaecologist";
import Pharmacy from './Components/Pharmacy/Pharmacy';
import PharmacyAddress from './Components/Pharmacy/PharmacyAddress';
import RatingReview from './Components/DoctorSearch/RatingReview';

import { reducer, initialState } from "./Components/reducer/UseReducer";
import Prescription from './Components/Appointment/Prescription';
import DoctorDashboard from './Components/Dashboard/DoctorDashboard';
import ForumList from './Components/Forum/ForumList';
import ForumForm from './Components/Forum/ForumForm';
import ForumSolo from './Components/Forum/ForumSolo';
import PatientDashboard from './Components/Dashboard/PatientDashboard';


//context API
export const UserContext = createContext();


 
const Routing = () => {

  // const { id } = useParams();

  return(
    <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Registration}></Route>
        <Route exact path="/doctorsearch" component={DoctorSearch}></Route> 
        <Route exact path="/doctor/register" component={DoctorRegistration}></Route>
        <Route exact path="/doctor/login" component={DoctorLogin}></Route>
        <Route exact path="/proffession/dentist" component={Dentist}></Route>
        <Route exact path="/proffession/gynaecologist" component={Gynaecologist}></Route>
        <Route exact path="/proffession/dietitian" component={Dietitian}></Route>
        <Route exact path="/proffession/ent" component={Ent}></Route>
        <Route exact path="/ambulancelist" component={AmbulanceList}></Route>
        <Route exact path="/admin/login" component={AdminLogin}></Route>
        <Route exact path="/admin/register" component={AdminRegistration}></Route>
        <Route exact path="/admin/doctorapproval" component={AdminApproval}></Route>
        <Route exact path="/appointment/patient" component={PatientAppointment}></Route>
        <Route exact path="/appointment/doctor" component={DoctorAppointment}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/pharmacy" component={Pharmacy}></Route>
        <Route exact path="/doctorsearch/:doctorId" component={RatingReview}></Route>
        <Route exact path="/pharmacy/checkout" component={PharmacyAddress}></Route>
        <Route exact path="/doctor/prescription/:patientname" component={Prescription}></Route>
        <Route exact path="/doctor/dashboard" component={DoctorDashboard}></Route>
        <Route exact path="/patient/dashboard" component={PatientDashboard}></Route>
        <Route exact path="/forum" component={ForumList}></Route>
        <Route exact path="/forum/new" component={ForumForm}></Route>
        <Route exact path="/forum/view/:id" component={ForumSolo}></Route>
      </Switch>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        {/* <Navbar /> */}
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
