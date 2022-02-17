import React from "react";
import { NavLink } from "react-router-dom";
import "./LatestNews.css";

const LatestNewsCard = (props) => {
    return (
        <>
            <div className="news-card-bg m-3">
                <div className="row">
                    <div className="col-md-5 news-cards-img">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="col-md-7 py-5 px-3">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <p style={{fontWeight:"bold"}}>{props.author}</p>
                        <div className="btn-container mt-4">
                            <NavLink className="c-btn c-btn-primary" to="">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNewsCard;