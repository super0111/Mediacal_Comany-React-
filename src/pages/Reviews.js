import React from "react";
import StarRatings from 'react-star-ratings';
import UserLayout from "../components/UserLayout";
import Doctor_info from "../images/reviwer-dr-img.png";
import Reviewer_Photo from "../images/reviwer.png";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Review(params) {
    return (
        <>
            <UserLayout>
                <div className="content-wrapper-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="bx-white-main">
                                    <div className="bx-white-bg p-3">
                                        <div className="col-12">
                                            <div className="d-block d-sm-flex align-items-center">
                                                <div className="comn-title-main py-0 pb-3">
                                                    <h1 className="mb-0">Reviews Details</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="dr-details">
                                                <div className="d-md-flex d-block user-info-hdr me-auto">
                                                    <div className="user-info-pro">
                                                        <img src={Doctor_info} alt="Doctor Details" />
                                                    </div>
                                                    <div className="ms-md-4 mt-3 mt-md-0">
                                                        <h3 className="mb-2">Dr. John Doe</h3>
                                                        <p className="dr-type mb-1">Cardiologist &bull; <span>3 years of experience</span></p>
                                                        <div className='rating-start'>
                                                        <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" />
                                                            <span>4.5 (37)</span>
                                                            <bdi>Reviews</bdi>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="dr-details">
                                                <div className="d-md-flex d-block me-auto">
                                                    <div className="mt-3 mt-md-0">
                                                        <h3 className="mb-2">Reviews</h3>
                                                        <div className='rating-start-resize d-flex'>
                                                            <h2 className="mb-2">4.5</h2>
                                                            <div className="ms-2">
                                                            <StarRatings numberOfStars={5} starDimension="14px" starSpacing="0" starEmptyColor="#DFB300" />
                                                                <bdi className="d-block text-secondary ps-0">37 Reviews</bdi>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="comn-review-class">
                                                <div className="d-flex align-items-center mb-2">
                                                    <img src={Reviewer_Photo} alt="Reviewer" />
                                                    <div className="ms-3 custmr-review-info">
                                                        <p className="reviewer-info">John Doe</p>
                                                        <p className="d-flex align-items-center justify-content-start text-secondary"> December 10, 2020 </p>
                                                    </div>
                                                    <div className="ms-auto rating-start text-center">
                                                    <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" />
                                                        <bdi className="text-secondary ps-0">5.0</bdi>
                                                    </div>
                                                </div>
                                                <p className="review-box ms-5">
                                                   <ReactReadMoreReadLess
                                                        charLimit={300}
                                                        readMoreText={"Read More"}
                                                        readLessText={"Read less"}
                                                    >
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </ReactReadMoreReadLess>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="comn-review-class">
                                                <div className="d-flex align-items-center mb-2">
                                                    <img src={Reviewer_Photo} alt="Reviewer" />
                                                    <div className="ms-3 custmr-review-info">
                                                        <p className="reviewer-info">John Doe</p>
                                                        <p className="d-flex align-items-center justify-content-start text-secondary"> December 10, 2020 </p>
                                                    </div>
                                                    <div className="ms-auto rating-start text-center">
                                                    <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" className="w-100" />
                                                        <bdi className="text-secondary ps-0">5.0</bdi>
                                                    </div>
                                                </div>
                                                <p className="review-box ms-5">
                                                   <ReactReadMoreReadLess
                                                        charLimit={300}
                                                        readMoreText={"Read More"}
                                                        readLessText={"Read less"}
                                                    >
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </ReactReadMoreReadLess>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="comn-review-class border-0">
                                                <div className="d-flex align-items-center mb-2">
                                                    <img src={Reviewer_Photo} alt="Reviewer" />
                                                    <div className="ms-3 custmr-review-info">
                                                        <p className="reviewer-info">John Doe</p>
                                                        <p className="d-flex align-items-center justify-content-start text-secondary"> December 10, 2020 </p>
                                                    </div>
                                                    <div className="ms-auto rating-start text-center">
                                                    <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" className="w-100" />
                                                        <bdi className="text-secondary ps-0">5.0</bdi>
                                                    </div>
                                                </div>
                                                <p className="review-box ms-5">
                                                   <ReactReadMoreReadLess
                                                        charLimit={300}
                                                        readMoreText={"Read More"}
                                                        readLessText={"Read less"}
                                                    >
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </ReactReadMoreReadLess>
                                                </p>
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