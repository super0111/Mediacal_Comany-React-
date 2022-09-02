import React from "react";
import UserLayout from "../components/UserLayout";
import Profile from "../images/consultation-images.png";
import ImageVisit from "../images/login-side-img-1.png";
import Covid from "../images/covid-icon.svg";
import Hair from "../images/hair.svg";

function ConsultationMedicalId() {
    return (
        <UserLayout>
            <div className="content-wrapper-section">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="bx-white-bg">
                                <div className="cmn-title-class hdr-titl-bg">
                                    <h1>Medical ID</h1>
                                </div>
                                <div className="body-titl-bg">
                                    <div className="row me-0">
                                        <div className="col-xxl-6 pe-0">
                                            <div className="row me-0">
                                                <div className="col-md-6 pe-0">
                                                    <div className="consultation-profile-images text-center mx-auto mb-4 mb-md-0">
                                                        <img src={Profile} className="" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pe-0">
                                                    <div className="row me-0">
                                                        <div className="col-12 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">Full Name</label>
                                                                <p>John Johnny Doe</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">Sex</label>
                                                                <p>Male</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">Gender</label>
                                                                <p>Male</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">My Blood group</label>
                                                                <p className="blod-grop-text">O+</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">DOB</label>
                                                                <p>06/13/1998</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">Height</label>
                                                                <p>5.7’’</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 pe-0">
                                                            <div className="detail-list-info">
                                                                <label className="d-block">Weight</label>
                                                                <p>163 Pound</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 pe-0">
                                            <div className="row me-0">
                                                <div className="col-md-6 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Email Address</label>
                                                        <p>johndoe@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Phone Number</label>
                                                        <p>+1 866 937 6652</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Address</label>
                                                        <p>63210 Olby Mount Sinai Beth Israel Hospital, France</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Medical Note</label>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="cmn-title-class">
                                <h1>Body Track</h1>
                            </div>
                            <div className="body-track-info">
                                <ul className="row me-0">
                                    <li className="col-xl-3 col-md-6 pe-0 track-cust-col mb-xl-0 mb-3">
                                        <div className="bx-white-bg">
                                            <div className="body-track-info-top d-flex align-items-center">
                                                <span>
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.5 4.29996C0.499814 3.21271 0.936789 2.17105 1.71261 1.40933C2.48843 0.647619 3.53794 0.229829 4.625 0.249963C5.91299 0.243123 7.14199 0.789344 8 1.74996C8.85801 0.789344 10.087 0.243123 11.375 0.249963C12.4621 0.229829 13.5116 0.647619 14.2874 1.40933C15.0632 2.17105 15.5002 3.21271 15.5 4.29996C15.5 8.31696 10.7157 11.35 8 13.75C5.29025 11.3297 0.5 8.31996 0.5 4.29996Z" fill="#EB5757" />
                                                    </svg>
                                                </span>
                                                <p className="ms-auto mb-0">
                                                    9:41am
                                                    <svg className="ms-3" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#6A6E83" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="body-track-info-ctr d-flex align-items-center">
                                                95 <span className="d-inline-block ps-1">BPM</span>
                                            </div>
                                            <div className="body-track-info-btm d-flex align-items-center mt-auto">
                                                <span>Heart rate</span>
                                                <p className="mb-0 ms-auto">
                                                    Past 15 Avg. <bdi>90</bdi> BPM
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-3 col-md-6 pe-0 track-cust-col mb-xl-0 mb-3">
                                        <div className="bx-white-bg">
                                            <div className="body-track-info-top d-flex align-items-center">
                                                <span>
                                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.84577 2.01172C1.98862 2.01172 1.29297 2.70737 1.29297 3.56452C1.29297 4.42167 1.98862 5.11731 2.84577 5.11731C3.70292 5.11731 4.39857 4.42167 4.39857 3.56452C4.39857 2.70737 3.70292 2.01172 2.84577 2.01172ZM2.84577 4.07379C2.56626 4.07379 2.34266 3.85019 2.34266 3.57068C2.34266 3.29118 2.56626 3.06758 2.84577 3.06758C3.12527 3.06758 3.34887 3.29118 3.34887 3.57068C3.34887 3.84397 3.12527 4.07379 2.84577 4.07379Z" fill="#219653" />
                                                        <path d="M4.63971 4.79498C4.24841 5.36637 3.59005 5.74526 2.84471 5.74526C2.21738 5.74526 1.65218 5.47818 1.26085 5.0558C0.496891 5.63345 0 6.54648 0 7.57751V14.8446C0 16.5837 1.40992 17.9998 3.15523 17.9998C4.89435 17.9998 6.31045 16.5899 6.31045 14.8446V7.57751C6.30424 6.37254 5.63343 5.32288 4.63965 4.79492L4.63971 4.79498ZM4.70803 15.2672C4.70803 15.4411 4.57139 15.5777 4.39747 15.5777C4.22355 15.5777 4.08691 15.4411 4.08691 15.2672V6.6525C4.08691 6.47859 4.22355 6.34194 4.39747 6.34194C4.57139 6.34194 4.70803 6.47858 4.70803 6.6525V15.2672Z" fill="#219653" />
                                                        <path d="M8.23669 4.63281C7.67768 4.63281 7.23047 5.08623 7.23047 5.63903C7.23047 6.19183 7.68388 6.64525 8.23669 6.64525C8.79569 6.64525 9.24291 6.19183 9.24291 5.63903C9.24291 5.08623 8.78949 4.63281 8.23669 4.63281ZM8.54725 5.64522C8.54725 5.81913 8.41061 5.95578 8.23669 5.95578C8.06277 5.95578 7.92613 5.81914 7.92613 5.64522V5.58311C7.92613 5.40919 8.06277 5.27255 8.23669 5.27255C8.41061 5.27255 8.54725 5.40919 8.54725 5.58311V5.64522Z" fill="#219653" />
                                                        <path d="M5.28515 5.63231e-06H1.76342C1.50254 5.63231e-06 1.28516 0.211187 1.28516 0.478264C1.28516 0.745342 1.49634 0.956523 1.76342 0.956523H3.04914V1.40994C3.39696 1.44099 3.71992 1.559 3.99942 1.73292V0.956517H5.28515C5.54602 0.956517 5.76341 0.745336 5.76341 0.478258C5.76341 0.211181 5.54602 0 5.28515 0V5.63231e-06Z" fill="#219653" />
                                                        <path d="M8.53399 2.48446H4.72656C4.87563 2.73912 4.97501 3.03104 5.00606 3.33537H8.62718C9.85078 3.33537 10.3352 4.05589 10.3352 4.77016C10.3352 5.89438 10.3539 8.67078 10.3539 10.8135C10.3539 12.0743 8.66444 11.9874 8.66444 10.8756V7.18617C8.52779 7.22344 8.38493 7.24207 8.23587 7.24207C8.06196 7.24207 7.90047 7.21723 7.74519 7.16754C7.73898 8.2607 7.72034 10.1303 7.72034 11.2048C7.72034 13.1613 11.3104 13.7514 11.3104 10.6706V4.71419C11.3042 3.40365 10.3539 2.48438 8.53399 2.48438V2.48446Z" fill="#219653" />
                                                    </svg>
                                                </span>
                                                <p className="ms-auto mb-0">
                                                    9:41am
                                                    <svg className="ms-3" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#6A6E83" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="body-track-info-ctr d-flex align-items-center">95%</div>
                                            <div className="body-track-info-btm d-flex align-items-center mt-auto">
                                                <span>Oxygen Level</span>
                                                <p className="mb-0 ms-auto">
                                                    Past 15 Avg. <bdi>90</bdi> BPM
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-3 col-md-6 pe-0 track-cust-col mb-xl-0 mb-3">
                                        <div className="bx-white-bg">
                                            <div className="body-track-info-top d-flex align-items-center">
                                                <span>
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.5 6C15.5 5.175 14.825 4.5 14 4.5V2.25C14 1.425 13.325 0.75 12.5 0.75H3.5C2.675 0.75 2 1.425 2 2.25V4.5C1.175 4.5 0.5 5.175 0.5 6V9.75H1.4975L2 11.25H2.75L3.2525 9.75H12.755L13.25 11.25H14L14.5025 9.75H15.5V6ZM12.5 4.5H8.75V2.25H12.5V4.5ZM3.5 2.25H7.25V4.5H3.5V2.25ZM2 6H14V8.25H2V6Z" fill="#2F80ED" />
                                                    </svg>
                                                </span>
                                                <p className="ms-auto mb-0">
                                                    9:41am
                                                    <svg className="ms-3" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#6A6E83" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="body-track-info-ctr d-flex align-items-center">
                                                7<span className="pe-1">hr</span> 53<span>Min</span>
                                            </div>
                                            <div className="body-track-info-btm d-flex align-items-center mt-auto">
                                                <div>
                                                    <span>Sleep</span>
                                                    <p className="mb-0">Time in bed</p>
                                                </div>
                                                <p className="mb-0 ms-auto">
                                                    Past 15 Avg. <bdi>90</bdi> BPM
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-3 col-md-6 pe-0 track-cust-col mb-xl-0 mb-3">
                                        <div className="bx-white-bg">
                                            <div className="body-track-info-top d-flex align-items-center">
                                                <span>
                                                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.17842 -0.265625C6.17842 -0.265625 0.128906 8.23246 0.128906 11.6128C0.128906 14.993 2.86989 17.7344 6.25053 17.7344C9.63117 17.7345 12.3722 14.9936 12.3722 11.6128C12.3722 8.23194 6.17799 -0.265625 6.17799 -0.265625H6.17842ZM4.05134 16.0173C3.97991 16.1128 3.87013 16.1636 3.75916 16.1636C3.68297 16.1636 3.60611 16.14 3.54078 16.0908C1.99976 14.9366 1.33004 12.8139 1.30241 12.7242C1.24303 12.5318 1.35077 12.3277 1.54302 12.2681C1.73662 12.2077 1.93972 12.3163 1.99963 12.5084C2.00574 12.5284 2.62982 14.4965 3.97842 15.5067C4.13944 15.6274 4.17236 15.8559 4.05138 16.0173L4.05134 16.0173ZM5.43847 16.8124C5.42999 16.8124 5.42167 16.8122 5.41319 16.8117C5.13203 16.7922 4.85393 16.7373 4.58671 16.6478C4.39582 16.5839 4.29266 16.377 4.35662 16.1861C4.4211 15.9949 4.62777 15.8926 4.81849 15.9561C5.02703 16.0258 5.24387 16.0689 5.4631 16.084C5.664 16.0979 5.81586 16.272 5.80212 16.4729C5.78905 16.6651 5.62837 16.8124 5.4385 16.8124L5.43847 16.8124Z" fill="#E81717" />
                                                    </svg>
                                                </span>
                                                <p className="ms-auto mb-0">
                                                    9:41am
                                                    <svg className="ms-3" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#6A6E83" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="body-track-info-ctr d-flex align-items-center">
                                                120 <span className="d-inline-block ps-1">BPM</span>
                                            </div>
                                            <div className="body-track-info-btm d-flex align-items-center mt-auto">
                                                <span>Blood Pressure</span>
                                                <p className="mb-0 ms-auto">
                                                    Past 15 Avg. <bdi>90</bdi> BPM
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-3 col-md-6 pe-0 track-cust-col mb-xl-0 mb-3">
                                        <div className="bx-white-bg">
                                            <div className="body-track-info-top d-flex align-items-center">
                                                <span>
                                                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.02343 6.89059C-0.773351 10.4064 -1.47665 15.469 3.72657 18C2.17967 15.0468 3.58594 12.3749 7.10163 9.8436C7.66414 12.2343 4.85159 12.7968 6.82037 14.9062C8.08602 15.3281 8.64853 14.3437 8.92979 12.6562C10.4767 13.7812 10.7579 15.6093 9.91418 17.8595C19.1956 10.6877 7.38288 7.17184 6.82037 0C4.28908 1.5469 3.02359 3.93757 4.42971 8.85937C3.44531 8.29686 2.74218 7.73435 3.02343 7.03122V6.89059Z" fill="#EFA220" />
                                                    </svg>
                                                </span>
                                                <p className="ms-auto mb-0">
                                                    9:41am
                                                    <svg className="ms-3" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.71094 7.00001L1.70094 0.990009L0.286938 2.40401L4.88694 7.00401L0.286938 11.604L1.70094 13.01L7.71094 7.00001Z" fill="#6A6E83" />
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="body-track-info-ctr d-flex align-items-center">
                                                195.5 <span className="d-inline-block ps-1"> Cal</span>
                                            </div>
                                            <div className="body-track-info-btm d-flex align-items-center mt-auto">
                                                <span>Glucose</span>
                                                <p className="mb-0 ms-auto">
                                                    Past 15 Avg. <bdi>90</bdi> BPM
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="btm-div-medical mt-3">
                                <div className="row me-0">
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg">
                                            <h2>Health Insurance</h2>
                                            <ul>
                                                <li>
                                                    <p className="">
                                                        Insurance Provide: <span className="d-inline-block">Centene</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="">
                                                        Insurance ID: <span className="d-inline-block">#985-961-259-46</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="">
                                                        Insutance Type: <span className="d-inline-block">Premium Insurance</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="">
                                                        Validation: <span className="d-inline-block">Life-Time</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="">
                                                        Insurance Note: <span className="d-block">Lorem Ipsum is simply dummy text of the printing industry.</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg  visits-list-info-main visits-list-fullimage">
                                            <h2>Diesease/ Dr. Visits</h2>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={ImageVisit} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p>Cardiologist 3 yrs of exp.</p>
                                                    <span className="d-block">Dr. John Doe</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">Sunday 10:30am</span>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={ImageVisit} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p>Cardiologist 3 yrs of exp.</p>
                                                    <span className="d-block">Dr. John Doe</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">Sunday 10:30am</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-6 mb-xxl-0 mb-3 pe-0">
                                        <div className="bx-white-bg  visits-list-info-main">
                                            <h2>Online Consultation</h2>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Covid} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p>Covid 19 symptms</p>
                                                    <span className="d-block">Lorem Ipsum is simply dummy text.....</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">23/08/2021</span>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex visits-list-info">
                                                <div className="visits-list-info-left">
                                                    <img src={Hair} className="" alt="" />
                                                </div>
                                                <div className="visits-list-info-ctr px-sm-3 d-sm-flex flex-column justify-content-center text-sm-start text-center">
                                                    <p>Covid 19 symptms</p>
                                                    <span className="d-block">Lorem Ipsum is simply dummy text.....</span>
                                                </div>
                                                <div className="visits-list-info-ctr visits-list-info-right text-end ms-sm-auto pe-sm-2 text-center">
                                                    <span className="d-block">Hair & scalp</span>
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

export default ConsultationMedicalId;
