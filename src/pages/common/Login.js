import React from "react";
import Login_Side from "../../images/login-side-img-1.png";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
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
                                                <h2>Sign in</h2>
                                                <p>Enter your credentials to continue</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="sign-opts">
                                                <a href="/">
                                                <span>
                                                        <div className="d-flex align-items-center">
                                                            <svg className="me-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M24.3761 13.2527C24.3761 12.3174 24.2987 11.6349 24.1311 10.9271H13.2333V15.1485H19.6301C19.5011 16.1975 18.8047 17.7774 17.2571 18.839L17.2354 18.9803L20.6811 21.5963L20.9198 21.6196C23.1122 19.6353 24.3761 16.7157 24.3761 13.2527Z"
                                                                    fill="#4285F4"
                                                                />
                                                                <path
                                                                    d="M13.2326 24.375C16.3664 24.375 18.9974 23.3638 20.919 21.6197L17.2563 18.839C16.2762 19.5089 14.9607 19.9766 13.2326 19.9766C10.1632 19.9766 7.55804 17.9923 6.62938 15.2496L6.49326 15.261L2.9104 17.9784L2.86354 18.106C4.77224 21.8218 8.69287 24.375 13.2326 24.375Z"
                                                                    fill="#34A853"
                                                                />
                                                                <path
                                                                    d="M6.63006 15.2497C6.38502 14.542 6.24321 13.7836 6.24321 13C6.24321 12.2163 6.38502 11.458 6.61717 10.7503L6.61067 10.5995L2.9829 7.8385L2.86421 7.89383C2.07754 9.43579 1.62614 11.1674 1.62614 13C1.62614 14.8326 2.07754 16.5641 2.86421 18.1061L6.63006 15.2497Z"
                                                                    fill="#FBBC05"
                                                                />
                                                                <path
                                                                    d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69291 1.625 4.77225 4.17804 2.86354 7.89384L6.61651 10.7503C7.55806 8.00763 10.1632 6.0233 13.2326 6.0233Z"
                                                                    fill="#EB4335"
                                                                />
                                                            </svg>
                                                            Sign in with Google
                                                        </div>
                                                    </span>
                                                </a>
                                                    <a href="/">
                                                    <span>
                                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <ellipse cx="14.5" cy="13.34" rx="12.6875" ry="12.6875" fill="url(#paint0_linear_3357_6985)" />
                                                            <path
                                                                d="M19.2249 18.3802L19.7885 14.7992H16.2629V12.4763C16.2629 11.4964 16.7544 10.5407 18.3336 10.5407H19.9375V7.49196C19.9375 7.49196 18.4825 7.25 17.0921 7.25C14.1872 7.25 12.2903 8.96548 12.2903 12.0698V14.7992H9.0625V18.3802H12.2903V27.0375C12.9383 27.1367 13.6012 27.1875 14.2766 27.1875C14.9519 27.1875 15.6148 27.1367 16.2629 27.0375V18.3802H19.2249Z"
                                                                fill="#F7F7F7"
                                                            />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_3357_6985" x1="14.5" y1="0.652527" x2="14.5" y2="25.9523" gradientUnits="userSpaceOnUse">
                                                                    <stop stopColor="#18ACFE" />
                                                                    <stop offset="1" stopColor="#0163E0" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    </a>
                                                    <a href="/">
                                                    <span>
                                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M27.1875 14.5C27.1875 21.5035 21.5098 27.1875 14.5 27.1875C7.49016 27.1875 1.8125 21.5035 1.8125 14.5C1.8125 7.49015 7.49016 1.8125 14.5 1.8125C21.5098 1.8125 27.1875 7.49015 27.1875 14.5Z"
                                                                fill="#283544"
                                                            />
                                                            <path
                                                                d="M20.4469 11.2895C20.3777 11.3299 18.7295 12.1823 18.7295 14.0721C18.8072 16.2274 20.8094 16.9832 20.8438 16.9832C20.8094 17.0236 20.5415 18.0129 19.7478 19.0499C19.1179 19.9431 18.4188 20.8438 17.3572 20.8438C16.3474 20.8438 15.9849 20.2484 14.8197 20.2484C13.5684 20.2484 13.2143 20.8438 12.2563 20.8438C11.1947 20.8438 10.4438 19.8949 9.77959 19.01C8.91668 17.8519 8.18324 16.0344 8.15734 14.2893C8.13989 13.3645 8.33015 12.4555 8.81311 11.6834C9.49477 10.6055 10.7117 9.87381 12.0407 9.84968C13.059 9.81769 13.9652 10.5011 14.5867 10.5011C15.1822 10.5011 16.2956 9.84968 17.5553 9.84968C18.0991 9.85021 19.5491 10.0028 20.4469 11.2895ZM14.5005 9.66505C14.3193 8.82056 14.8197 7.97608 15.2858 7.43739C15.8813 6.78593 16.8219 6.34375 17.633 6.34375C17.6848 7.18824 17.3566 8.01646 16.7701 8.61967C16.2438 9.27113 15.3376 9.76156 14.5005 9.66505Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                              <label className="form-comn-label d-block">Email or Phone number</label>
                                              <input type="text" className="form-control comn-input-style" placeholder="Ex.Hello@doctor.com" />
                                            </div>
                                            <div className="col-12 mb-3">
                                              <label className="form-comn-label d-block">Password</label>
                                              <input type="password" className="form-control comn-input-style" placeholder="*******" />
                                            </div>
                                            <div className="col-6 mb-3">
                                            <div className="cust-checkbox-new">
                                                <label className="cust-chk-bx">
                                                  <input type="checkbox" id="remember" name="remember" />
                                                  <span className="cust-chkmark"></span>Remember me</label>
                                              </div>
                                            </div>
                                            <div className="col-6 mb-3 text-end">
                                              <Link to="/forgot-password" className="comn-link-form">Forgot Password? </Link>
                                            </div>
                                            <div className="col-12 mt-4">
                                              <Link to="/dashboard">
                                                <button className="btn-comn-class w-100">Sign in </button>
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
    );
}
