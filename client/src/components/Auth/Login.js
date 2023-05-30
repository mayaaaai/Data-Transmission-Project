import React, { useState } from "react";
import '../../styles/Login.css';
import Navbar from "../Layout/Navbar";


function Body() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function handleClick(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        const response = await fetch("http://localhost:5050/record/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        const message = await response.text();


        if (message === "Invalid email or password")
            window.alert("Invalid email or password");
        else {
            // window.alert("Login successful");
            localStorage.setItem("email", email);
            window.location.href = "/menu";
        }
    }

    return (
        <div className="my-login-form">
            <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input type="email" id="emailAddress" className="form-control" onChange={handleEmailChange} />
                    <label className="form-label text-black" htmlFor="form2Example1">
                        Email address
                    </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4 text-black">
                    <input type="password" id="password" className="form-control" onChange={handlePasswordChange} />
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                    </label>
                </div>

                {/* 2 column grid layout for inline styling */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/* Submit button */}
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
                            Sign in
                        </button>

                    </div>
                </div>

                {/* Register buttons */}
                <div className="text-center text-black">
                    <p>
                        Not a member? <a href="/register">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

function Home() {
    return (
        <>
            <Navbar />
            <Body />
        </>
    );
}

export default Home;
