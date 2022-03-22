import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'


const ForumForm = () => {

    var today = new Date();
    today = today.toDateString();
    console.log(today);


    const history = useHistory();
    const [forum, setForum] = useState({
        title: "", introduction: "", imageLink: "", body: "", date: today
    });

    // ADD BLOG
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setForum({ ...forum, [name]: value });
    };

  const PostData = async (e) => {
    e.preventDefault();

    const { title, introduction, imageLink, body, date } = forum;

    const res = await fetch("/forum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        introduction,
        imageLink,
        body,
        date
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("Invalid Details");
      console.log("Invalid Details");
    } else {
      window.alert("Blog Posted Successfully");
      console.log("Blog Posted Successfully");

      history.push("/");
    }
  };

   
    return (
        <>
            <Navbar />
            <section id="forumform">
                <div className="content-box-sm">
                    <div className="container">
                        <SectionHeader title="Write your Forum" />
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <form method="POST">
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="title" name="title" placeholder="Enter Forum Title" value={forum.title} onChange={handleInputs} />

                                    </div>
                                    <div class="mb-3">
                                        <label for="body1" class="form-label">Introduction</label>
                                        <input type="text" class="form-control" id="body1" name="introduction" placeholder="Enter Forum Introduction" value={forum.introduction} onChange={handleInputs}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="imglink" class="form-label">Image Link</label>
                                        <input type="text" class="form-control" id="imglink" name="imageLink" placeholder="https://imagelink" value={forum.imageLink} onChange={handleInputs}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="body" class="form-label">Body</label>
                                        <textarea class="form-control" placeholder="Enter Body Here..." id="body" name="body" style={{ height: "150px" }} value={forum.body} onChange={handleInputs}></textarea>

                                    </div>
                                    <div class="mb-3">
                                        <input type="text" disabled class="form-control" id="date" name="date" placeholder="https://imagelink" value={today} />
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100" onClick={PostData}>Add to Forum</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumForm;