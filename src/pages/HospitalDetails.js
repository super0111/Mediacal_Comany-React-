import React from "react";
import UserLayout from "../components/UserLayout";
import GoogleMapReact from "google-map-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderImage from "../images/slider-image.png";

function HospitalDetails() {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    var Details = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        arrows: false,
    };

    return (
        <UserLayout>
            <div className="content-wrapper-section">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="bx-white-bg">
                                <div className="cmn-title-class hdr-titl-bg">
                                    <h1>Hospital Details</h1>
                                </div>
                                <div className="body-titl-bg">
                                    <div className="row me-0">
                                        <div className="col-md-6 pe-0">
                                            <div className="detail-sliders d-inline-block align-top me-lg-5 mb-3">
                                                <Slider {...Details}>
                                                    <div className="dtils-slide-inr">
                                                        <img src={SliderImage} className="w-100 h-100" alt="" />
                                                    </div>
                                                    <div className="dtils-slide-inr">
                                                        <img src={SliderImage} className="w-100 h-100" alt="" />
                                                    </div>
                                                    <div className="dtils-slide-inr">
                                                        <img src={SliderImage} className="w-100 h-100" alt="" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className="d-inline-block align-top mb-3 text-detail-sliders">
                                                <div className="row me-0">
                                                    <div className="col-12 pe-0">
                                                        <div className="detail-list-info">
                                                            <label className="d-block">Hospital :</label>
                                                            <p>Dhaka Medical College Hospital</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pe-0">
                                                        <div className="detail-list-info">
                                                            <label className="d-block">Timeing :</label>
                                                            <ul>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Monday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Tuesday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Wednesday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Thursday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Friday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <p className="mb-0">Saturday</p>
                                                                    <p className="ms-auto mb-0">9am-5pm</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pe-0">
                                            <div className="row me-0">
                                                <div className="col-md-6 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Website :</label>
                                                        <p>johndoes.com</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Contact number :</label>
                                                        <p>+1 866 937 6652</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">Address :</label>
                                                        <p>63210 Olby Mount Sinai Beth Israel Hospital, France</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 pe-0">
                                                    <div className="detail-list-info">
                                                        <label className="d-block">About Center :</label>
                                                        <p>Since 1990, our focus remains that there is a real person behind every sample. We put the patient first. Our dedication to personalized service and continued innovation enables us to assist healthcare providers with the most accurate information so they can continue their care plan. To provide the best service and support to our patients and clients through personalization and innovation. To put our patients and clients first by providing timely, accurate, and progressive testing and always being accessible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="map-section mt-4 overflow-hidden">
                                <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyASLm3eSo0TMCBNFbPnXOiraORhu4buMiU" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default HospitalDetails;
