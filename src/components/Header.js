import ToggleIcon from "../images/toggle-icon.svg";
import Logo from "../images/logo.svg";
import Search from "../images/search-icon.svg";
import { Link } from "react-router-dom";
import UserIcon from "../images/profile.png";
import Notification from "../images/notification-icon.svg";
import { Dropdown } from "react-bootstrap";

export default function Header() {
    const addmainclass = () => {
        document.getElementById("root").classList.toggle("toggled-custom-class");
    };

    const openUserinfo = () => {
        document.getElementById("user-detail").classList.toggle("active");
    };

    return (
        <>
            <header className="header-fix-top-cust">
                <nav className="navbar fixed-top">
                    <ul className="d-flex align-items-center me-auto hdr-top-box">
                        <li className="nav-item">
                            <div className="hdr-top-box-inr">
                                <div className="toggle-icon-main toggle-icon-main-sec d-xl-none d-block" onClick={addmainclass}>
                                    <img src={ToggleIcon} alt="" />
                                </div>
                                <div className="d-xl-none d-block responsive-view-logo">
                                    <Link to="/dashboard">
                                        <img src={Logo} alt="" />
                                    </Link>
                                </div>
                                <div className="d-md-block d-none">
                                    <div className="hdr-top-box-inr-icon">
                                        <img src={Search} alt="" />
                                    </div>
                                    <input type="search" className="form-control" placeholder="Search Anything" />
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-three-dots-vertical d-md-none d-block" onClick={openUserinfo} aria-hidden="true"></i>
                        </li>
                    </ul>
                    <ul className="d-flex align-items-center ms-auto responsive-view-menu" id="user-detail">
                        <li className="w-100">
                            <div className="d-block position-relative hdr-top-box-inr d-md-none">
                                <div className="hdr-top-box-inr-icon">
                                    <img src={Search} alt="" />
                                </div>
                                <input type="search" className="form-control" placeholder="Search Anything" />
                            </div>
                        </li>
                        <li className="nav-item right-nav-link-new notification-custom-main">
                            <Dropdown>
                                <Dropdown.Toggle className="notification-click">
                                    <div className="notification-hdr">
                                        <img src={Notification} className="" alt="" />
                                        <span className="conout-number"></span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="notification-custom">
                                    <Dropdown.Item className="p-0">
                                        <ul className="notifcn-row-wrapper">
                                            <li className="">
                                                <Link to="#">
                                                    <div className="snrs-notifcn-title">New Message</div>
                                                    <div className="snrs-notifcn_item-time">2 hrs ago</div>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="#">
                                                    <div className="snrs-notifcn-title">New order has been received</div>
                                                    <div className="snrs-notifcn_item-time">3 hrs ago</div>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="#">
                                                    <div className="snrs-notifcn-title">Application has been reject</div>
                                                    <div className="snrs-notifcn_item-time">5 hrs ago</div>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="">
                                                    <div className="snrs-notifcn-title">Bruce's Party</div>
                                                    <div className="snrs-notifcn_item-time">5 hrs ago</div>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="">
                                                    <div className="snrs-notifcn-title">New Message</div>
                                                    <div className="snrs-notifcn_item-time">2 hrs ago</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="p-0">
                                        <div className="p-3">
                                            <Link to="/notification">
                                                <button type="button" className="notifcn-btn">
                                                    view all
                                                </button>
                                            </Link>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="profile-inner-menu">
                            <Dropdown>
                                <Dropdown.Toggle id="profile-dropdown" className="profile-click d-inline-block ps-3 header-user-profile-inner-cust me-0">
                                    <div className="pro-sec-cust">
                                        <img src={UserIcon} alt="" className="" />
                                        <div>
                                            <h6>Hello Dr.</h6>
                                            <span>Macy’s</span>
                                        </div>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="profile-inner-cust">
                                    <Dropdown.Item href="/medical-admin/profile">
                                        <i className="bi bi-person-fill"></i> My Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/medical-admin/login" className="border-0">
                                        <i className="bi bi-box-arrow-right"></i> Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                    <div className="d-md-none">
                        <div className="search-form-wrapper">
                            <div className="search-bar">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
