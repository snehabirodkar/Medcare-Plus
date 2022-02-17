import React from "react";
import "./TestimonialSection.css";
import testimonialImg from '../../Assets/Images/home-image/testimonial.png';
const TestimonialCard = (props) => {
    return (
        <>
            <div className="testimonial-card-bg m-3">
                <div className="row">
                    <div className="col-md-8 mx-auto p-5">
                        <div className="row mb-5">
                            <div className="col-md-3 mx-auto">
                                <img src={testimonialImg} alt="Quote" className="quote-img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="pt-1">{props.testimonial}</p>
                                <h3 className="reviewer pt-3 text-center">{props.title}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;