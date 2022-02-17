import React from "react";
import {NavLink} from 'react-router-dom';
import "./AppointmentSection.css";

const AppointmentCard = (props) => {
    return (
        <>
            <div className="appointment-card-bg m-3">
                <div className="row">
                    <div className="col">
                        <img className="doctor-img" src={props.imgsrc} alt="symptom" />
                    </div>
                </div>
                <div className="px-3">
                    <h4 className="pt-3">{props.title}</h4>
                    <p className="pt-1 pb-3">{props.description}</p>
                    <NavLink to={props.linkto} className="btn btn-primary mb-4">Know More</NavLink>
                </div>
            </div>
        </>
    );
};

export default AppointmentCard;