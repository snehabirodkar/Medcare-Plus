import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import { useHistory } from "react-router-dom";

import "./Approval.css"

const AdminApproval = () => {

    const history = useHistory();

    // fetching data from db
    const [approvalDoctors, setApprovalDoctors] = useState([]);

    // Removing approve from approve page
    const [flag, setFlag] = useState(0);

    // MIDDLEWARE 
    const callAdminPage = async () => {
        try {
            const res = await fetch("/admin/doctorapproval", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await res.json();
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push('/admin/login');
        }
    }

    // FETCHING APPROVAL DATA
    const getApprovalData = async () => {
        try {
            const res = await fetch("/getApprovalData", {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            });
            const getApprovedDoctors = await res.json();
            //    console.log(getApprovedDoctors);
            setApprovalDoctors(getApprovedDoctors);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    // APPROVE DOCTOR
    const approveDoctor = async (doctorID) => {
        setFlag(1);
        try {
            const res = await fetch('/approve', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: doctorID
                })
            })

            const data = res.json();
            console.log(data);

            if (res.status === 200) {
                window.alert("Approved Successful");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (id) => {
        const res = await fetch('/delete', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })

        window.alert("Are u sure You want Delete");
        const data = res.json();

        if (res.status === 200) {
            window.alert("Deleted Successfully");
        }
    }

    useEffect(() => {
        callAdminPage();
        getApprovalData();
    }, [flag]);

    return (
        <>
            <section id="admin-approval-section">
                <form method="GET">
                    <div className="container-fluid">
                        <div className="content-box-md">
                            <div className="row">
                                <div className="col-md-10 col-sm-3 mx-auto">
                                    <div className="row">
                                        <SectionHeader title="Pending Approvals" />
                                        <div className="col-md-12 col-xs-5 mx-auto">
                                            <div className="row">
                                                <div className="col-md-12 mx-auto">
                                                    <div className="d-flex flex-wrap justify-content-center">
                                                        {
                                                            approvalDoctors.map((item, index) => (
                                                                <div className="approval-card" key={index} id={"card" + item.approved}>
                                                                    <h4 className="doctor-name mb-4">Dr. {item.name} </h4>
                                                                    {/* <p className="id">{item._id}</p> */}
                                                                    <p className="approved" hidden>{item.approved}</p>
                                                                    <p className="experience">
                                                                        Years of Experience: {item.experience}
                                                                    </p>
                                                                    <p className="designation">
                                                                        Designation: {item.designation}
                                                                    </p>
                                                                    <p className="location">Location: {item.location} </p>
                                                                    <hr />
                                                                    <button className="btn btn-success" onClick={() => approveDoctor(item._id)} >Approve</button>
                                                                    <button className="btn btn-outline-danger mx-2" onClick={() => onDelete(item._id)}>Decline</button>
                                                                </div>
                                                            ))

                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AdminApproval;