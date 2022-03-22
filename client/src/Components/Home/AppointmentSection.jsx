import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import '../../../src/helper.css';
import './AboutSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppointmentCard from "./AppointmentCard";
import SectionHeader from "../SectionHeader";
import Slider from "react-slick";

import dentist from '../../../src/Assets/Images/home-image/dentist.png';
import gynaecologist from '../../../src/Assets/Images/home-image/gynaecologist.png';
import diet from '../../../src/Assets/Images/home-image/diet.png';
import end from '../../../src/Assets/Images/home-image/end.jfif';

const AppointmentSection = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 'true',
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
              <div className="col-md-10 col-sm-10 mx-auto">
                <div className="row">
                  <SectionHeader title="Book an Appointment" />
                  <div className="col-md-12 col-xs-7 mx-auto">
                    <Slider {...settings}>
                      <AppointmentCard title="Dentist" description="A dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, and treatment of diseases." imgsrc={dentist} linkto="/proffession/dentist" />
                      <AppointmentCard title="Gynaecologist" description="Gynaecology is the medical practice dealing with the health of the female reproductive system and its cure. " imgsrc={gynaecologist} linkto="/proffession/gynaecologist" />
                      <AppointmentCard title="Dietician/Nutrition" description="A dietitian is an expert in identifying and treating disease-related malnutrition and in conducting medical nutrition therapy." imgsrc={diet} linkto="/proffession/dietitian" />
                      <AppointmentCard title="ENT" description="An ENT doctor is an expert in handling diseases associated ear, nasal passage, larynx (voice box) and its cure." imgsrc={end} linkto="/proffession/ent" />
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

export default AppointmentSection;