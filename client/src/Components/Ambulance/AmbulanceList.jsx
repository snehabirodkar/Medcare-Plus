import React from "react";
import SectionHeader from '../SectionHeader';

const AmbulanceList = () => {
    return (
        <>
            <section id="ambulance">
                <div className="content-box-md">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="Ambulance List" />
                                <hr className="mb-5"/>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Hospital Name</th>
                                            <th scope="col">Ambulance Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Shantabai Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8452083830">+91 8452083830</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Hira Mongi Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ashirwaad Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Hira Mongi Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Ashirwaad Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Hira Mongi Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Ashirwaad Hospital</td>
                                            <td><a style={{color: "#111"}} href="tel:8967540987">+91 8967540987</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AmbulanceList;