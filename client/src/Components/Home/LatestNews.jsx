import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../src/index.css';
import '../../../src/helper.css';
import './LatestNews.css';
import SectionHeader from "../SectionHeader";
import LatestNewsCard from "./LatestNewsCard";
import dietImg from "../../../src/Assets/Images/home-image/news-diet.png";
import covidImg from "../../../src/Assets/Images/home-image/news-covid.png";

const LatestNews = () => {
    return (
        <>
            <section id="about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="content-box-md">
                            <div className="col-md-11 mx-auto">
                            <SectionHeader title="Latest News" />
                                <div className="row">
                                    <div className="col-md-6 mx-auto">
                                        <LatestNewsCard title="Myth's around Covid" description="12 Vaccine Myth and facts that you should be aware of during the covid crisis. This is are lifesaver hacks." imgsrc={covidImg} author="Dr. Reshma Pandit" linkto="" />
                                    </div>
                                    <div className="col-md-6 mx-auto">
                                        <LatestNewsCard title="Better Lifestyle" description="These are 3 life changing steps you need to take to ensure you have a better life style as well to entain life" imgsrc={dietImg} author="Dr. Rahul Desai" linkto="" />
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

export default LatestNews;