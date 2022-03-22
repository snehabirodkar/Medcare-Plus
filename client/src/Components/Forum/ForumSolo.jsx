import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css';

const ForumSolo = () => {
    const [forum, setForum] = useState([]);

    // FETCHING FORUM DATA
    const getForumData = async () => {
        try {
            const res = await fetch("/getForum", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getForumData = await res.json();
            // console.log("Patients Appointmet:", getForumData);
            setForum(getForumData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getForumData();
    }, []);

    const param = useParams();
    console.log(param.id);

    return (
        <>
            <Navbar />
            <section id="forumsolo">
                <div className="content-box-md">
                    <div className="container">
                        <div className="row">
                            {
                                forum.map((value, index) => {
                                    if (value._id == param.id) {
                                        console.log(value);
                                        return (
                                            <>
                                                <div className="col-md-10 mx-auto">
                                                    <h1>{value.title}</h1>
                                                    <p className="d-flex justify-content-end" style={{opacity: "0.5"}}>{value.date}</p>
                                                    <hr />
                                                    <p>{value.introduction}</p>
                                                    <div className="img-solo">
                                                        <img src={value.imageLink} alt=" Demol Image" height="350px" />
                                                    </div>
                                                    <p style={{padding: "10px"}}>{value.body}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumSolo;