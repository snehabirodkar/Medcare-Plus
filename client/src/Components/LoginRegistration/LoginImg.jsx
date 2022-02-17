import React from "react";
import loginImg from '../../Assets/Images/login-image/login-img.png';

const LoginImg = () => {
    return (
        <>
            <div className="col-md-6 my-auto">
                <div className="login-image-container">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default LoginImg