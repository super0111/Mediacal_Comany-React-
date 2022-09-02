import React from "react";
import UserLayout from "../components/UserLayout";
import Profile from "../images/admin.png";
import "toastr/build/toastr.min.css";
import { Link} from "react-router-dom";

export default function AdminEdit() {
    
        return (
            <>
                <UserLayout>
                    <div className="content-wrapper-section">
                        <div className="container-fluid">
                            <div className="col-12 mt-3">
                                <div className="dash-top-box-2">
                                    <div className="bx-white-bg p-3">
                                    <div className="set-box-head mb-4 pb-sm-4 pb-0">
                                        <div className="d-md-flex d-block user-info-hdr">
                                            <div className="user-info-pro">
                                                <img src={Profile} alt="User Profile" />
                                            </div>
                                            <div className="ms-md-4">
                                                <bdi>Jane Doe</bdi>
                                                <div className="user-role">Sub admin</div>
                                                <div className="user-info">janedoe@gmail.com</div>
                                            </div>
                                            <div className="ms-md-4 mt-auto user-info">+1 (515) 516 0624</div>
                                            <div className="ms-md-auto">
                                                <span className="comn-status-class active-class m-auto">Active</span>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="set-box-head mb-4 pb-4">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 mb-3">
                                                    <label className="d-block login-label-text mb-2">First Name</label>
                                                    <input type="text" className="form-control login-comn-input px-3 bg-white"  name="fname" placeholder="Enter Your First Name" />
                                                    
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-3">
                                                    <label className="d-block login-label-text mb-2">Last Name</label>
                                                    <input type="text" className="form-control login-comn-input px-3 bg-white"  name="lname" placeholder="Enter Your Last Name" />
                                                    
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-3">
                                                    <label className="d-block login-label-text mb-2">Email Address</label>
                                                    <input type="email" className="form-control login-comn-input px-3 bg-white" name="email" placeholder="Enter Your Email Address" />
                                                    
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-3">
                                                    <label className="d-block login-label-text mb-2">User Role</label>
                                                    <select className="form-select login-comn-input px-3 bg-white">
                                                        <option>User Role</option>
                                                        <option>Admin</option>
                                                        <option>Sub Admin</option>
                                                        <option>Contributor</option>
                                                        <option>Staff</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 mb-3">
                                                    <label className="d-block login-label-text mb-2">Status</label>
                                                    <select className="form-select login-comn-input px-3 bg-white">
                                                        <option>Active</option>
                                                        <option>Deactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="set-box-head border-0">
                                            <div className="dash-part-hdr permission-table">
                                                <div className="dash-part-table-hdr">
                                                    <span>Permissions</span>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-striped mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Module</th>
                                                                <th scope="col">Read</th>
                                                                <th scope="col">Write</th>
                                                                <th scope="col">Create</th>
                                                                <th scope="col">Delete</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Admin</th>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="read-1" name="read-1" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="write-1" name="write-1" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="create-1" name="create-1" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="delete-1" name="delete-1" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Sub Admin</th>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="read-2" name="read-2" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="write-2" name="write-2" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="create-2" name="create-2" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="delete-2" name="delete-2" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Staff</th>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="read-3" name="read-3" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="write-3" name="write-3" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="create-3" name="create-3" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="delete-3" name="delete-3" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            <tr className="rounded-bottom">
                                                                <th scope="row">Contributor</th>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="read-4" name="read-4" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="write-4" name="write-4" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="create-4" name="create-4" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="cust-chk-bx-2">
                                                                        <input type="checkbox" id="delete-4" name="delete-4" />
                                                                        <span className="cust-chkmark-2"></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-xxl-2 col-md-3 col-sm-4 mb-2">
                                                    <Link to="/admins">
                                                        <button type="submit" className="btn-type-1 w-100">
                                                            Save Changes
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="col-xxl-2 col-md-3 col-sm-4 mb-2">
                                                    <Link to="/admins">
                                                        <button type="button" className="btn-comn-class-2 w-100">
                                                            Reset
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="col-xxl-2 col-md-3 col-sm-4 mb-2">
                                                    <Link to="/admins">
                                                        <button type="button" className="btn-comn-class-2 btn-red-bg w-100">
                                                            Delete User
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </UserLayout>
            </>
        );
    }



