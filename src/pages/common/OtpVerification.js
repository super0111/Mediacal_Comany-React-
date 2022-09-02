import React from 'react'
import Login_Side from "../../images/login-side-img-3.png";
import Logo from "../../images/logo.png";
import OtpInput from 'react-otp-input';
import { Link } from "react-router-dom";

export default function OtpVerification() {
    const [OTP, setOTP] = React.useState("");
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
                                                <h2>OTP Verificatoin</h2>
                                                <p className='mb-0'>Enter your OTP that we send you on </p>
                                                <p>johndeo@gmail.com</p>
                                            </div>
                                            <div className="col-12 mb-3">
                                            <OtpInput
                                                value={OTP}
                                                onChange={setOTP}
                                                numInputs={4}
                                                separator={<span style={{ width: "10px" }}></span>}
                                                isInputNum={true}
                                                shouldAutoFocus={true}
                                                inputStyle={{
                                                    border: "1px solid rgba(106, 110, 131, 0.2)",
                                                    borderRadius: "10px",
                                                    width: "50px",
                                                    height: "50px",
                                                    fontSize: "14px",
                                                    color: "#000",
                                                    fontWeight: "400",
                                                }}
                                                focusStyle={{
                                                    border: "1px solid transparent",
                                                    outline: "none",
                                                    boxShadow: "0 0 3px #1081e84d"
                                                }}
                                            />
                                            </div>
                                            <div className="col-12 mt-4">
                                              <Link to="/reset-password">
                                                <button className="btn-comn-class w-100">Continue</button>
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
