import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { UserContext } from "../../App"

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    document.cookie = "isPlogin=";
    localStorage.setItem("cuser", "");

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: 'USER', payload: false })
            history.push('/', { replace: true });
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error);
        })
    });
    return (
        <div>
            <h1>Logout Successfully</h1>
        </div>
    )
}

export default Logout
