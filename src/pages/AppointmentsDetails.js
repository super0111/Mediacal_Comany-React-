import React from "react";
import UserLayout from "../components/UserLayout";
import Pdf from "../images/pdficon.svg";
import Profile from "../images/consultation-images.png";
import StarRatings from "react-star-ratings";
import Doctor_info from "../images/doctor_info.png";
import { Link } from "react-router-dom";

function AppointmentsDetails() {
    return (
        <UserLayout>
            <div className="content-wrapper-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="cmn-title-class d-flex align-items-center">
                                <h1>Appointments Details</h1>
                                <button className="btn-comn-class ms-auto">Complete</button>
                            </div>
                        </div>
                        <div className="col-12 btm-div-medical appointments-dtls-list">
                            <div className="row me-0">
                                <div className="col-xxl col-lg-4 pe-0 mb-3 mb-lg-0">
                                    <div className="bx-white-bg h-100">
                                        <div className="d-flex patient-details-info mb-3">
                                            <img src={Doctor_info} alt="" />
                                            <div className="ps-3 d-flex flex-column justify-content-center">
                                                <h2 className="mb-0">Dr. John Doe</h2>
                                                <p className="py-1">Cardiologist 3 years of experience</p>
                                                <div className="d-flex align-items-center starrating-info">
                                                    <StarRatings numberOfStars={1} starDimension="20px" starEmptyColor="#EFA220" />
                                                    <p className="mb-0">4.5 ( 37)</p>
                                                    <Link to="/reviews">
                                                        <bdi className="ps-1">Reviews</bdi>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="me-0 row">
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Email Address :</label>
                                                    <p className="d-inline-block">johndeo@gmail.com</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">DOB :</label>
                                                    <p className="d-inline-block">13/06/1998</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Mobile Number :</label>
                                                    <p className="d-inline-block">+1 12345 67150</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">City :</label>
                                                    <p className="d-inline-block">New york</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Devices :</label>
                                                    <p className="d-inline-block">12</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Degree :</label>
                                                    <p className="d-inline-block">New york, USA</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">State :</label>
                                                    <p className="d-inline-block">New york, USA</p>
                                                </div>
                                            </li>
                                            <li className="col-md-6 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Gender :</label>
                                                    <p className="d-inline-block">Choose your gender</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-md-6 pe-0">
                                    <div className="bx-white-bg h-100">
                                        <h2>Patient Details</h2>
                                        <div className="d-flex patient-details-info mb-3">
                                            <img src={Profile} alt="" />
                                            <div className="ps-3 d-flex flex-column justify-content-center">
                                                <span>About Appoitment</span>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                            </div>
                                        </div>
                                        <ul className="me-0 row">
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Full Name:</label>
                                                    <p className="d-inline-block">Mrs. John Doe</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Email Address:</label>
                                                    <p className="d-inline-block">johndoes.com</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Phone Number:</label>
                                                    <p className="d-inline-block">+1 866 937 6652</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Gender:</label>
                                                    <p className="d-inline-block">Male</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label>Address:</label>
                                                    <p>63210 Olby Mount Sinai Beth Israel Hospital, France</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-lg-4 col-md-6 pe-0 mt-sm-0 mt-3">
                                    <div className="bx-white-bg h-100">
                                        <h2>Appointment Details</h2>
                                        <ul className="me-0 row pt-2">
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Date :</label>
                                                    <p className="d-inline-block">12/08/2021 </p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Time Slote :</label>
                                                    <p className="d-inline-block">09:00 AM - 10:00PM</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Type :</label>
                                                    <p className="d-inline-block">Dr. Visit At Your Place</p>
                                                </div>
                                            </li>
                                            <li className="col-12 pe-0">
                                                <div className="detail-list-info">
                                                    <label className="d-inline-block">Address :</label>
                                                    <p className="d-inline-block">63210 Olby Mount Sinai Beth Israel, France</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="btm-div-medical mt-3">
                                <div className="row me-0">
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg visits-list-info-main h-100">
                                            <h2>Appointment Documents</h2>
                                            <div className="row me-0">
                                                <div className="col-md-6 pe-0">
                                                    <div className="documents-info text-center">
                                                        <span className="mx-auto">
                                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M14.8125 11C13.8805 11 13.125 10.2165 13.125 9.25C13.125 8.2835 13.8805 7.5 14.8125 7.5C15.7445 7.5 16.5 8.2835 16.5 9.25C16.5 10.2165 15.7445 11 14.8125 11Z" fill="#6A6E83" />
                                                                <path d="M25.5 18H12L15.375 13.3333L16.5 14.5L19.875 9.83333L25.5 18Z" fill="#6A6E83" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M27 24H9C7.34315 24 6 22.6569 6 21V3C6 1.34315 7.34315 0 9 0H27C28.6569 0 30 1.34315 30 3V21C30 22.6569 28.6569 24 27 24ZM9 3V21H27V3H9Z" fill="#6A6E83" />
                                                                <path d="M3 9H0V27C0 28.6569 1.34315 30 3 30H21V27H3V9Z" fill="#6A6E83" />
                                                            </svg>
                                                        </span>
                                                        <p className="mb-0">Whtas.jpg</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pe-0">
                                                    <div className="documents-info text-center">
                                                        <span className="mx-auto">
                                                            <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 18C13.49 18 15.5 15.99 15.5 13.5V4.5C15.5 2.01 13.49 0 11 0C8.51 0 6.5 2.01 6.5 4.5V13.5C6.5 15.99 8.51 18 11 18Z" fill="#6A6E83" />
                                                                <path d="M18.5 13.5C18.5 17.64 15.14 21 11 21C6.86 21 3.5 17.64 3.5 13.5H0.5C0.5 18.795 4.415 23.145 9.5 23.88V28.5H12.5V23.88C17.585 23.145 21.5 18.795 21.5 13.5H18.5Z" fill="#6A6E83" />
                                                            </svg>
                                                        </span>
                                                        <p className="mb-0">Record.mp3</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg visits-list-info-main h-100">
                                            <h2>Medical Reports</h2>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Pdf} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p className="mb-0">Diagnosis Report</p>
                                                    <span className="d-block">Dr. John Doe</span>
                                                    <span className="d-block">NY Medical Hospital</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">23/08/2021</span>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Pdf} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p className="mb-0">Diagnosis Report</p>
                                                    <span className="d-block">Dr. John Doe</span>
                                                    <span className="d-block">NY Medical Hospital</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">23/08/2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg visits-list-info-main h-100">
                                            <h2>Medical Prescriptions</h2>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Pdf} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p className="mb-0">Diagnosis Report</p>
                                                    <span className="d-block">NY Medical Hospital</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">23/08/2021</span>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Pdf} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p className="mb-0">Diagnosis Report</p>
                                                    <span className="d-block">NY Medical Hospital</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">23/08/2021</span>
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
    );
}

export default AppointmentsDetails;
