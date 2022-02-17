import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import '../../../src/helper.css';
import './AboutSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../SectionHeader";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <section id="appointment-section">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 col-sm-3 mx-auto">
                                <div className="row">
                                    <SectionHeader title="Testimonial Section" />
                                    <div className="col-md-12 mx-auto">
                                        <Slider {...settings}>
                                            <TestimonialCard title="Anand Bakshi" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda quas rem laudantium quae harum illum suscipit natus ipsam sunt cum beatae neque similique, dicta, a nulla esse officiis repellendus." />
                                            <TestimonialCard title="Viraj Seth" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda quas rem laudantium quae harum illum suscipit natus ipsam sunt cum beatae neque similique, dicta, a nulla esse officiis repellendus." />
                                            <TestimonialCard title="Vipul Hegde" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda quas rem laudantium quae harum illum suscipit natus ipsam sunt cum beatae neque similique, dicta, a nulla esse officiis repellendus." />
                                            <TestimonialCard title="Manas Parma" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda quas rem laudantium quae harum illum suscipit natus ipsam sunt cum beatae neque similique, dicta, a nulla esse officiis repellendus." />
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;