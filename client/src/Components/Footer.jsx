import react from 'react';
import './Footer.css';

const Footer = () => {

    var currentDate = new Date();
    currentDate = currentDate.getFullYear();

    return (
        <>
            {/* <footer>
                <div className="footer-wrapper" style={{background: 'rgba(33, 132, 187, 1)', padding: '20px', color: '#fff'}}>
                    <p className="text-center pt-3">Developed with ❤️@2021 copyright</p>
                </div>
            </footer> */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Medcare Plus<i> We are here for you</i> is an initiative  to help the upcoming users to have an ease of access to doctors with no hastle of queue or track of their prescription. MedcarePlus focuses on providing the most efficient way to book appointments and hastle-free consultance and with an inbuilt pharmacy which helps us to book medcine. Join Now</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="">Search Doctors</a></li>
                                <li><a href="">Pharmacy</a></li>
                                <li><a href="">Patient Login</a></li>
                                <li><a href="">Doctor Login</a></li>
                                <li><a href="">Blood Bank</a></li>
                                <li><a href="">Ambulance List</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Contribute</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; {currentDate} All Rights Reserved by
                                <a href="#"> MedcarePlus</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;