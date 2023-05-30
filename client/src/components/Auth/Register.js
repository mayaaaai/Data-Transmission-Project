import React, { useState } from "react";
import '../../styles/Register.css';
import Navbar from "../Layout/Navbar";



function Body() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [homeAddress, setHomeAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleHomeAddressChange = (e) => {
        setHomeAddress(e.target.value);
    }

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    }

    async function handleClick(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
            homeAddress: homeAddress,
            cardNumber: cardNumber
        }
        const response = await fetch("http://localhost:5050/record/register", {
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

        if (message === "Account already exists") {
            window.alert("Account already exists");
            window.location.href = "/login";
        }
        else {
            window.alert("Account created!");
            localStorage.setItem("email", email);
            window.location.href = "/menu";
        }
    }

    return (
        <div className="my-register-form">
            <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input type="email" id="emailAddress" className="form-control" onChange={handleEmailChange} />
                    <label className="form-label text-black" htmlFor="emailAddress">
                        Email address
                    </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" onChange={handlePasswordChange} />
                    <label className="form-label text-black" htmlFor="password">
                        Password
                    </label>
                </div>

                {/* Home Address input */}
                <div className="form-outline mb-4">
                    <input type="text" id="homeAddress" className="form-control" onChange={handleHomeAddressChange} />
                    <label className="form-label text-black" htmlFor="homeAddress">
                        Home Address
                    </label>
                </div>

                {/* Card Number input */}
                <div className="form-outline mb-4">
                    <input type="text" id="cardNumber" className="form-control" onChange={handleCardNumberChange} />
                    <label className="form-label text-black" htmlFor="cardNumber">
                        Card Number
                    </label>
                </div>

                {/* Submit button */}
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
                    Register
                </button>

                {/* Login link */}
                <div className="text-center text-black">
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

function Register() {
    return (
        <>
            <Navbar />
            <Body />
        </>
    );
}

export default Register;