import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "../components/UserLayout";
import Profile from "../images/ac_profile.png";
import Doctor_info from "../images/doctor_info.png";
import Report_upload from "../images/report.svg";
import StarRatings from 'react-star-ratings';
import "toastr/build/toastr.min.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function OnlineConsultation() {
    return (
        <>
            <UserLayout>
                <div className="content-wrapper-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="comn-title-main">
                                    <h1 className="mb-0">Online consultation</h1>
                                </div>
                            </div>
                            <div className="col-12 consultation-main-part">
                                <div className="row me-0">
                                    <div className="col-lg-4 pe-0">
                                        <div className="flex-lg-column mb-lg-0 mb-3">
                                            <div className="details-box-main">
                                                <div className="dash-top-box">
                                                    <div className="set-box-head border-0">
                                                        <div className="set-comn-title">
                                                            <h2>Patient Details</h2>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="d-md-flex d-block user-info-hdr me-auto">
                                                                <div className="user-info-pro">
                                                                    <img src={Profile} alt="User Profile" />
                                                                    <Link to="/consultation-medical-Id">
                                                                        <div className="txt-btn">Medical ID</div>
                                                                    </Link>
                                                                </div>
                                                                <div className="ms-md-4">
                                                                    <p className="mb-2">About Appoitment</p>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <table className="details-table-box">
                                                            <tr>
                                                                <td>Full Name:</td>
                                                                <td>Mrs. John Doe</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email Address:</td>
                                                                <td>johndoes.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Phone Number:</td>
                                                                <td>+1 866 937 6652</td>
                                                            </tr>
                                                            <tr></tr>
                                                            <tr>
                                                                <td>Gender:</td>
                                                                <td>Male</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="align-top">Address:</td>
                                                                <td>63210 Olby Mount Sinai Beth Israel Hospital, France</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="dash-top-box mt-3">
                                                    <div className="set-box-head border-0">
                                                        <div className="set-comn-title mb-4">
                                                            <h2>Payment Details</h2>
                                                        </div>
                                                        <div className="pymt-details">
                                                            <p className="mb-2">About Treatment</p>
                                                            <p>Hair & scalp</p>
                                                            <p>The Medical Company</p>
                                                            <p>
                                                                <ReactReadMoreReadLess
                                                                    charLimit={100}
                                                                    readMoreText={"details-table "}
                                                                    readLessText={"Read less"}
                                                                >
                                                                    It involves applying products to the hair, blow-drying it, and sealing it with a flat iron.It involves applying products to the hair, blow-drying it, and sealing it with a flat iron details-table 
                                                                </ReactReadMoreReadLess>
                                                            </p>
                                                        </div>
                                                        <div className="tretment-type mt-3">
                                                            <p>
                                                                Type : <span>Online Consultaion</span>
                                                            </p>
                                                            <p>
                                                                Inovice Date : <span>01/18/2022</span>
                                                            </p>
                                                            <p>
                                                                Total : <span>$19.00</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dash-top-box mt-3 dr-details">
                                                    <div className="set-box-head border-0">
                                                        <div className="set-comn-title">
                                                            <h2>Doctor Details</h2>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="d-md-flex d-block user-info-hdr me-auto">
                                                                <div className="user-info-pro">
                                                                    <img src={Doctor_info} alt="Doctor Details" />
                                                                </div>
                                                                <div className="ms-md-4 mt-3 mt-md-0">
                                                                    <h3 className="mb-2">Dr. John Doe</h3>
                                                                    <p className="dr-type">
                                                                        Cardiologist &bull; <span>3 years of experience</span>
                                                                    </p>
                                                                    <div className="rating-start">
                                                                        <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" />
                                                                        <span>4.5 (37)</span>
                                                                        <Link to="/reviews">
                                                                            <bdi>Reviews</bdi>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <table className="details-table-box mt-3">
                                                            <tr>
                                                                <td>Email Address:</td>
                                                                <td>johndoe@gmail.com</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Phone Number:</td>
                                                                <td>+1 866 937 6652</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Devices:</td>
                                                                <td>12</td>
                                                            </tr>
                                                            <tr>
                                                                <td>State:</td>
                                                                <td>New york,USA</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Gender:</td>
                                                                <td>Choose your gender</td>
                                                            </tr>
                                                            <tr>
                                                                <td>DOB:</td>
                                                                <td>13/06/1998</td>
                                                            </tr>
                                                            <tr>
                                                                <td>City:</td>
                                                                <td>New York</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Degree:</td>
                                                                <td>New york,USA</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 pe-0">
                                        <div className="details-box-main">
                                            <div className="dash-top-box">
                                                <form className="row pe-md-5 me-0">
                                                    <div className="col-12 mb-4 pe-0">
                                                        <h2 className="set-comn-title mb-3">Appointments Details</h2>
                                                        <p className="mb-2">About Appoitment</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 mb-4 pe-0">
                                                        <label className="d-block login-label-text mb-2">First Name</label>
                                                        <input type="text" className="form-control login-comn-input px-3 bg-white" name="fname" placeholder="Jone" />
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 mb-4 pe-0">
                                                        <label className="d-block login-label-text mb-2">Last Name</label>
                                                        <input type="text" className="form-control login-comn-input px-3 bg-white" name="lname" placeholder="Doe" />
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 mb-4 pe-0">
                                                        <label className="d-block login-label-text mb-2">Email Address</label>
                                                        <input type="email" className="form-control login-comn-input px-3 bg-white" name="email" placeholder="Jonedoe@gmail.com" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="row me-0">
                                                <div className="col-md-12 pe-0">
                                                    <div className="row me-0">
                                                        <div className="col-sm-12 col-md-6 mt-3 pe-0">
                                                            <div className="dash-top-box">
                                                                <div className="title">Medical Prescriptions</div>
                                                                <Link to="#">
                                                                    <div className="medical-rpt-box">
                                                                        <div className="report-upld-box">
                                                                            <img src={Report_upload} alt="Doctor Details" />
                                                                        </div>
                                                                        <div className="report-info">
                                                                            <h6>Diagnosis Report</h6>
                                                                            <p>NY Medical Hospital</p>
                                                                        </div>
                                                                        <div className="ms-auto report-date">
                                                                            23/08/2021
                                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2 me-1">
                                                                                <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#323232" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#">
                                                                    <div className="medical-rpt-box">
                                                                        <div className="report-upld-box">
                                                                            <img src={Report_upload} alt="Doctor Details" />
                                                                        </div>
                                                                        <div className="report-info">
                                                                            <h6>Diagnosis Report</h6>
                                                                            <p>NY Medical Hospital</p>
                                                                        </div>
                                                                        <div className="ms-auto report-date">
                                                                            23/08/2021
                                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2 me-1">
                                                                                <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#323232" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 mt-3 pe-0">
                                                            <div className="dash-top-box">
                                                                <div className="title">Medical Reports</div>
                                                                <Link to="#">
                                                                    <div className="medical-rpt-box">
                                                                        <div className="report-upld-box">
                                                                            <img src={Report_upload} alt="Doctor Details" />
                                                                        </div>
                                                                        <div className="report-info">
                                                                            <h6>Diagnosis Report</h6>
                                                                            <p>Dr. John Doe</p>
                                                                            <p>NY Medical Hospital</p>
                                                                        </div>
                                                                        <div className="ms-auto report-date">
                                                                            23/08/2021
                                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2 me-1">
                                                                                <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#323232" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </Link>

                                                                <Link to="#">
                                                                    <div className="medical-rpt-box">
                                                                        <div className="report-upld-box">
                                                                            <img src={Report_upload} alt="Doctor Details" />
                                                                        </div>
                                                                        <div className="report-info">
                                                                            <h6>Diagnosis Report</h6>
                                                                            <p>Dr. John Doe</p>
                                                                            <p>NY Medical Hospital</p>
                                                                        </div>
                                                                        <div className="ms-auto report-date">
                                                                            23/08/2021
                                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2 me-1">
                                                                                <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#323232" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 mt-3 pe-0">
                                                            <div className="dash-top-box">
                                                                <div className="set-comn-title mb-3">
                                                                    <h2>Time Slotes</h2>
                                                                </div>
                                                                <div className="time-slote-line">
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <div className="time-slot-info">
                                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9.0013 17.3334C4.39893 17.3334 0.667969 13.6025 0.667969 9.00008C0.667969 4.39771 4.39893 0.666748 9.0013 0.666748C13.6037 0.666748 17.3346 4.39771 17.3346 9.00008C17.3296 13.6004 13.6016 17.3284 9.0013 17.3334ZM9.0013 2.33341C5.3194 2.33341 2.33464 5.31818 2.33464 9.00008C2.33464 12.682 5.3194 15.6667 9.0013 15.6667C12.6832 15.6667 15.668 12.682 15.668 9.00008C15.6638 5.3199 12.6815 2.33755 9.0013 2.33341ZM13.168 9.83342H8.16797V4.83342H9.83464V8.16675H13.168V9.83342Z" fill="#6A6E83" />
                                                                                </svg>
                                                                                <span className="ms-2">9:00 AM - 10:00 AM</span>
                                                                                <span className="ms-2">10:00 AM - 11:00 AM</span>
                                                                                <div className="ms-1">
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mt-2">
                                                                            <div className="time-slot-info">
                                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9.0013 17.3334C4.39893 17.3334 0.667969 13.6025 0.667969 9.00008C0.667969 4.39771 4.39893 0.666748 9.0013 0.666748C13.6037 0.666748 17.3346 4.39771 17.3346 9.00008C17.3296 13.6004 13.6016 17.3284 9.0013 17.3334ZM9.0013 2.33341C5.3194 2.33341 2.33464 5.31818 2.33464 9.00008C2.33464 12.682 5.3194 15.6667 9.0013 15.6667C12.6832 15.6667 15.668 12.682 15.668 9.00008C15.6638 5.3199 12.6815 2.33755 9.0013 2.33341ZM13.168 9.83342H8.16797V4.83342H9.83464V8.16675H13.168V9.83342Z" fill="#6A6E83" />
                                                                                </svg>
                                                                                <span className="ms-2">12:00 PM - 1:00 PM</span>
                                                                                <span className="ms-2">1:00 PM - 2:00 PM</span>
                                                                                <div className="ms-1">
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mt-2">
                                                                            <div className="time-slot-info active">
                                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9.0013 17.3334C4.39893 17.3334 0.667969 13.6025 0.667969 9.00008C0.667969 4.39771 4.39893 0.666748 9.0013 0.666748C13.6037 0.666748 17.3346 4.39771 17.3346 9.00008C17.3296 13.6004 13.6016 17.3284 9.0013 17.3334ZM9.0013 2.33341C5.3194 2.33341 2.33464 5.31818 2.33464 9.00008C2.33464 12.682 5.3194 15.6667 9.0013 15.6667C12.6832 15.6667 15.668 12.682 15.668 9.00008C15.6638 5.3199 12.6815 2.33755 9.0013 2.33341ZM13.168 9.83342H8.16797V4.83342H9.83464V8.16675H13.168V9.83342Z" fill="#6A6E83" />
                                                                                </svg>
                                                                                <span className="ms-2">2:00 PM - 3:00 PM</span>
                                                                                <span className="ms-2">3:00 PM - 4:00 PM</span>
                                                                                <div className="ms-1">
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                    <div className="slot-dot">&bull;</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 mt-2">
                                                                            <div className="time-slot-info">
                                                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9.0013 17.3334C4.39893 17.3334 0.667969 13.6025 0.667969 9.00008C0.667969 4.39771 4.39893 0.666748 9.0013 0.666748C13.6037 0.666748 17.3346 4.39771 17.3346 9.00008C17.3296 13.6004 13.6016 17.3284 9.0013 17.3334ZM9.0013 2.33341C5.3194 2.33341 2.33464 5.31818 2.33464 9.00008C2.33464 12.682 5.3194 15.6667 9.0013 15.6667C12.6832 15.6667 15.668 12.682 15.668 9.00008C15.6638 5.3199 12.6815 2.33755 9.0013 2.33341ZM13.168 9.83342H8.16797V4.83342H9.83464V8.16675H13.168V9.83342Z" fill="#6A6E83" />
                                                                                </svg>
                                                                                <span className="ms-2">5:00 PM - 6:00 PM</span>
                                                                                <span className="ms-2">6:00 PM - 7:00 PM</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
