import React from 'react';
import Login_Side from "../../images/login-side-img-4.png";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";


export default function ResetPassword() {
  return (
    <>
         <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="login-left-side-main">
                            <div className="login-main-scroll">
                                <div className="login-inner-section p-3">
                                    <div className="login-top-logo p-3">
                                        <img src={Logo} className="img-fluid" alt="" />
                                    </div>
                                    <div className="m-auto login-comn-box py-5">
                                        <form className="row">
                                            <div className="col-12">
                                                <h2>Reset your password</h2>
                                                <p>Enter and confirm your new password below.</p>
                                            </div>
                                            <div className="col-12 mb-3">
                                              <label className="form-comn-label d-block">Password</label>
                                              <input type="password" className="form-control comn-input-style" placeholder="*****" />
                                            </div>
                                            <div className="col-12 mb-3">
                                              <label className="form-comn-label d-block">Confirm Password</label>
                                              <input type="password" className="form-control comn-input-style" placeholder="*****" />
                                            </div>
                                            <div className="col-12 mt-4">
                                              <Link to="/login">
                                                <button className="btn-comn-class w-100">Login</button>
                                              </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 d-lg-block d-none p-0">
                        <div className="rgt-comn-login">
                            <div className="d-flex align-items-center h-100 position-relative pe-5 py-5">
                                <img src={Login_Side} className="rgt-side-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
