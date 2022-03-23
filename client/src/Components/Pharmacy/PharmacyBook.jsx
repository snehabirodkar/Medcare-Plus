import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";

import PharmacyImage from '../../Assets/Images/pharmacy-image/pharmacyheader.png';
import genericMedicine from '../../Assets/Images/pharmacy-image/generic-medicine.png';

import alert1 from '../../Assets/Images/pharmacy-image/1.png'
import alert2 from '../../Assets/Images/pharmacy-image/2.png'
import alert3 from '../../Assets/Images/pharmacy-image/3.png'
import alert4 from '../../Assets/Images/pharmacy-image/4.png'
import alert5 from '../../Assets/Images/pharmacy-image/5.png'

import assurance from '../../Assets/Images/pharmacy-image/assurance.png'

import { NavLink } from "react-router-dom";

const PharmacyBook = () => {
    return (
        <>
            <Navbar />

            <div id="pharmacy-header">
                <img src={PharmacyImage} alt="" style={{ height: "45vh", width: "100%" }} />
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div id="medicine-category" className="d-flex flex-wrap justify-content-around">
                            <div className="medicine-category-card text-center m-2 px-5">
                                <h5>Generic Medicine</h5>
                                <img src={genericMedicine} alt="" style={{ height: "100px", margin: "10px" }} />
                                <br />
                                <NavLink to="/pharmacy/book" class="btn btn-primary m-2">Order Now</NavLink>
                            </div>

                            <div className="medicine-category-card text-center m-2 px-5">
                                <h5>Healthy Lifestyle</h5>
                                <img src={genericMedicine} alt="" style={{ height: "100px", margin: "10px" }} />
                                <br />
                                <NavLink to="/pharmacy/book" class="btn btn-primary m-2">Order Now</NavLink>
                            </div>

                            <div className="medicine-category-card text-center m-2 px-5">
                                <h5>Personal Care</h5>
                                <img src={genericMedicine} alt="" style={{ height: "100px", margin: "10px" }} />
                                <br />
                                <NavLink to="/pharmacy/book" class="btn btn-primary m-2">Order Now</NavLink>
                            </div>

                            <div className="medicine-category-card text-center m-2 px-5">
                                <h5>Baby Products</h5>
                                <img src={genericMedicine} alt="" style={{ height: "100px", margin: "10px" }} />
                                <br />
                                <NavLink to="/pharmacy/book" class="btn btn-primary m-2">Order Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={assurance} alt="" srcset="" style={{height: "40vh", width: "100%"}} className="my-5" />
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="d-flex flex-wrap justify-content-center">
                        <div className="medicine-alert-card">
                            <img className="px-3" src={alert1} alt="" style={{height: "100px", margin: "10px"}} />
                        </div>
                        <div className="medicine-alert-card">
                            <img className="px-3" src={alert2} alt="" style={{height: "100px", margin: "10px"}} />
                        </div>
                        <div className="medicine-alert-card">
                            <img className="px-3" src={alert3} alt="" style={{height: "100px", margin: "10px"}} />
                        </div>
                        <div className="medicine-alert-card">
                            <img className="px-3" src={alert4} alt="" style={{height: "100px", margin: "10px"}} />
                        </div>
                        <div className="medicine-alert-card">
                            <img className="px-3" src={alert5} alt="" style={{height: "100px", margin: "10px"}} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PharmacyBook;