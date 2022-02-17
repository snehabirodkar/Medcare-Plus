import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AdminRegistration = () => {

    const history = useHistory();
    const [admin, setAdmin] = useState({
        id: 0, name: "", email: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setAdmin({...admin, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, password, cpassword } = admin;

        const res = await fetch('/adminRegister',  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 ||  !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
    
            history.push("/admin/Login");
        }
    }

    
    return (
        <>
            <section id="register">
                <div className="container-fluid">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-6 px-4 my-auto mx-auto">
                                <h1 className="text-center" style={{ color: '#2184BB', fontWeight: 'bold' }}>MedCare Plus</h1>
                                <p className="text-center" style={{ fontWeight: 'bold', fontSize: "22px"}} >Admin Registration</p>
                                <form className="mx-5">
                                    <div class="mb-3">
                                        <input type="number" class="form-control" name="id" id="id" value={0} onChange={handleInputs} hidden />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputName" class="form-label">Name</label>
                                        <input type="text" value="" class="form-control" name="name" value={admin.name} onChange={handleInputs} id="name" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" value="" class="form-control" name="email" value={admin.email} onChange={handleInputs}  id="email" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" value="" class="form-control" value={admin.password} onChange={handleInputs} name="password" id="password" required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                        <input type="password" value="" class="form-control" name="cpassword" id="cpassword" value={admin.cpassword} onChange={handleInputs} 
                                        required />
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100" onClick={PostData}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminRegistration;