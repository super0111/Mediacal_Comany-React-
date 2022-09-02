import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "../components/UserLayout";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import Profile from "../images/ac_profile.png";
import Right_arrow from "../images/right_arrow_img.png";
import "toastr/build/toastr.min.css";

export default function Settings() {
  return (
    <>
        <UserLayout>
            <div className="content-wrapper-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="comn-title-main">
                                <h1 className="mb-0">
                                    Account Settings
                                    <img src={Right_arrow} alt="right arrow" className="px-2"/>
                                    <span id="setting-tab">My Profile</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-12 settings-main-part mt-3">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="my_profile">
                                <Row>
                                    <Col lg={3}>
                                        <Nav variant="pills" className="flex-lg-column mb-lg-0 mb-3 nav-tabs-custom-class">
                                            <Nav.Item>
                                                <Nav.Link eventKey="my_profile">My Profile</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="change_password">Change Password</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="notification">Notification</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="logout" className="border-0" href="/medical-admin/login">
                                                    <button type="button" className="border-0 bg-transparent text-start w-100">Logout</button>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col lg={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="my_profile">
                                                <div className="dash-top-box">
                                                    <div className="set-box-head mb-4 pb-4">
                                                        <div className="set-comn-title">
                                                            <h2>My Account</h2>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="d-md-flex d-block user-info-hdr me-auto">
                                                                <div className="user-info-pro">
                                                                    <img src={Profile} alt="User Profile" />
                                                                </div>
                                                                <div className="ms-md-4">
                                                                    <bdi>John Doe</bdi>
                                                                    <div className="user-role">Admin</div>
                                                                    <div className="d-sm-flex d-block mt-2">
                                                                        <button type="button" className="btn-type-1">
                                                                            Change
                                                                        </button>
                                                                        <button type="button" className="btn-comn-class-2 btn-comn-padding mt-2 mt-sm-0 ms-sm-2">
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   <form>
                                                        <div className="set-box-head mb-4 pb-3">
                                                            <div className="set-comn-title">
                                                                <h2>Personal Information</h2>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">First Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                            
                                                                            name="fname"
                                                                            placeholder="Jone"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Last Name</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="lname"
                                                                            placeholder="Doe"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Email Address</label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="email"
                                                                            placeholder="jonedoe@gmail.com"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Mobile Number</label>
                                                                        <input
                                                                            type="tel"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="mono"
                                                                            placeholder="+1 515 516 0624"
                                                                        />
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="set-box-head border-0">
                                                            <div className="set-comn-title">
                                                                <h2>Social Accounts</h2>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Twitter</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name= "Twitter_link"
                                                                            placeholder="https://www.twitter.com/lt_stock_picks"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Facebook</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="Facebook_link"
                                                                            placeholder="Add link"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Google +</label>
                                                                        <input
                                                                            type="tel"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="Google_link"
                                                                            placeholder="Add link"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">LinkedIn</label>
                                                                        <input
                                                                            type="tel"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="LinkedIn_link"
                                                                            placeholder="https://www.linkedin.com/lt_stock_picks"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Instagram</label>
                                                                        <input
                                                                            type="tel"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="Instagram_link"
                                                                            placeholder="Add link"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <label className="d-block login-label-text mb-2">Quora</label>
                                                                        <input
                                                                            type="tel"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="Quora_link"
                                                                            placeholder="Add link"
                                                                        />
                                                                        
                                                                    </div>
                                                                    <div className="col-xxl-5 col-xl-6 col-md-7 mt-sm-3">
                                                                        <div className="row align-items-center">
                                                                            <div className="col-sm-6 pb-0">
                                                                                <button type="submit" className="btn-type-1 w-100">
                                                                                    Save Changes
                                                                                </button>
                                                                            </div>
                                                                            <div className="col-sm-6 mt-2 mt-sm-0">
                                                                                <button type="button" className="btn-comn-class-2 w-100">
                                                                                    Cancel
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="change_password">
                                                <div className="dash-top-box">
                                                    <form className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label className="d-block login-label-text mb-2">Old Password</label>
                                                            <bdi className="d-block position-relative show-class">
                                                                <input
                                                                    type="password"
                                                                    className="form-control login-comn-input px-3 bg-white"
                                                                    
                                                                    name="old_password"
                                                                    placeholder="Old Password."
                                                                />
                                                                <span className="show-pwd">
                                                                <i class="bi bi-eye"></i>
                                                                </span>
                                                            </bdi>
                                                            
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="d-block login-label-text mb-2">New Password</label>
                                                                    <bdi className="d-block position-relative show-class">
                                                                        <input
                                                                            type="password"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="new_password"
                                                                            placeholder="New Password."
                                                                        />
                                                                        <span className="show-pwd">
                                                                            <i class="bi bi-eye"></i>
                                                                        </span>
                                                                    </bdi>
                                                                    
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <label className="d-block login-label-text mb-2">Retype New Password</label>
                                                                    <bdi className="d-block position-relative show-class">
                                                                        <input
                                                                            type="password"
                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                            
                                                                            name="confirm_password"
                                                                            placeholder="New Password."
                                                                        />
                                                                        <span className="show-pwd">
                                                                            <i class="bi bi-eye"></i>
                                                                        </span>
                                                                    </bdi>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-5 col-xl-6 col-md-6 mt-sm-3">
                                                            <div className="row align-items-center">
                                                                <div className="col-sm-6 pb-0">
                                                                    <button type="submit" className="btn-type-1 w-100">
                                                                        Save Changes
                                                                    </button>
                                                                </div>
                                                                <div className="col-sm-6 mt-2 mt-sm-0">
                                                                    <button type="button" className="btn-comn-class-2 w-100">
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="notification">
                                                <div className="dash-top-box">
                                                    <div className="set-box-head mb-4 pb-4">
                                                        <div className="set-comn-title">
                                                            <h2>Activity</h2>
                                                        </div>
                                                        <div className=" set-noti-part">
                                                            <div className="row  ms-2 mt-3">
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not1" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not1">
                                                                        Email me whenever someone make changes in admin portal. 
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not2" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not2">
                                                                        Email me whenever any payments recived. 
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not3" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not3">
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="set-box-head border-0">
                                                        <div className="set-comn-title">
                                                            <h2>System</h2>
                                                        </div>
                                                        <div className=" set-noti-part">
                                                            <div className="row  ms-2 mt-3">
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not4" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not4">
                                                                        Email me whenever server down.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not5" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not5">
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not6" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not6">
                                                                        Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not7" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not7">
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 my-2">
                                                                    <div className="form-check form-switch row align-items-center">
                                                                        <input className="form-check-input col-1" type="checkbox" id="set_not8" />
                                                                        <label className="form-check-label ms-2 col-11" htmlFor="set_not8">
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-5 col-xl-6 col-md-7 mt-sm-3 ps-0">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-sm-6 ps-1">
                                                                            <Link to="/notification">
                                                                            <button type="submit" className="btn-type-1 w-100">
                                                                                Save Changes
                                                                            </button>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="col-sm-6 mt-2 mt-sm-0 ps-1">
                                                                            <button type="button" className="btn-comn-class-2 w-100">
                                                                                Cancel
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    </>
  )
}
