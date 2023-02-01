import React from "react"
import "./Auth.css"

import logo from "./images/logo.png";

const Auth = () => {
    return (
        <div className="container">
            <div className="form-main">
                <img src={logo} alt="logo"
                    style={{ height: '120px', width: '500px', marginLeft:'10rem' }} />
                <h3>Create an account</h3>
                <p>Register on our website with our correct email address and information</p>


                <form action="">
                    <div className="form-inner">

                        <div className="form-group">
                            <label id="firstName">First Name
                            </label>
                            <input type="text"
                                id="name"
                                name="name"
                                placeholder="Jeremiah"
                                required />
                        </div>

                        <div className="form-group">
                            <label id="email">Email Address
                            </label>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Fame@gmail.com"
                                required />
                        </div>


                        <div className="form-group">
                            <label id="number">Phone Number
                            </label>
                            <input type="tel"
                                id="number"
                                name="number"
                                placeholder="2346655678"
                                required />
                        </div>

                        <div className="form-group">
                            <label id="number">Password
                            </label>
                            <input type="password"
                                id="number"
                                name="password"
                                placeholder="*********"
                                required />
                        </div>
                        <div  className="checkBox">
                            <input
                                type="checkbox" />
                            <label>
                                Remember me
                            </label>

                        </div>

                    </div>
                    <button id="signUp"
                        type="submit">
                        Sign up
                    </button>

                </form>
                <div className="signup-footer">
                <p>Already have an account? <span>Sign up</span></p>
                </div>
            </div>

            <div className="right">

            </div>
        </div>
    )
}

export default Auth