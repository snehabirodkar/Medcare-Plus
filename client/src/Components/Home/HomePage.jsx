import React, {useContext} from 'react';
import Footer from '../Footer';
import AboutSection from './AboutSection';
import AppointmentSection from './AppointmentSection';
import HomeSection from './HomeSection';
import LatestNews from './LatestNews';
import Testimonial from './Testimonial';


const HomePage = () => {

    return (
        <>
            <HomeSection />
            <AboutSection />
            <AppointmentSection />
            <LatestNews />
            <Testimonial />
            <Footer />
        </>
    );
};

export default HomePage;