import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'

const ForumList = () => {

    const [forum, setForum] = useState([]);

    // FETCHING FORUM DATA
    const getForumData = async () => {
        try {
            const res = await fetch("/getForum", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getForumData = await res.json();
            console.log("Forum Data:", getForumData);
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

    return (
        <>
            <Navbar />
            <section id="forumlist">
                <div className="container">
                    <SectionHeader title="Forum Discussion" />
                    <div className="row">
                        <div className="col-md-9 mx-auto d-flex justify-content-end py-3 px-5">
                            <NavLink className="btn btn-primary" to="/forum/new">New Discussion</NavLink>
                        </div>
                    </div>
                    <div className="row forumwrapper">
                        <div className="col-md-10 mx-auto">
                            <div className="forum-wrapper">
                                {
                                    forum.map((item, index) => {
                                        var linkto = "/forum/view/" + item._id;
                                        console.log(linkto);
                                        return (
                                            <>
                                                <div className="forum-card" key={index}>
                                                    <div className="forum-image-wrapper">
                                                        <img src={item.imageLink} />
                                                    </div>
                                                    <div className="forum-card-wrapper">
                                                        <p className="d-flex flex-row-reverse forum-date">{item.date}</p>
                                                        <h3 className="forum-title">{item.title}</h3>
                                                        <p className="forum-body">
                                                            {item.body}
                                                        </p>
                                                        <NavLink to={linkto} className="btn btn-primary w-100">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumList;