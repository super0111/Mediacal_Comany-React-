import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import HospitalsConsultation from "../images/dash-sidebar-icon-2-9.svg";
import Doctors from "../images/dash-sidebar-icon-3.svg";
import Patient from "../images/dash-sidebar-icon-4.svg";
import FluCenters from "../images/dash-sidebar-icon-5.svg";
import Appointments from "../images/dash-sidebar-icon-6.svg";
import Pharmacys from "../images/dash-sidebar-icon-7.svg";
import Billing from "../images/dash-sidebar-icon-8.svg";
import CovidUpdates from "../images/dash-sidebar-icon-10.svg";
import Admins from "../images/dash-sidebar-icon-11.svg";
import Settings from "../images/dash-sidebar-icon-12.svg";
import Logout from "../images/logout-icon.svg";

export default function Sidebar() {
	const sidebar_change = (name) => {
		if (name) {
			document.getElementById("root").classList.remove("toggled-custom-class");
		}
	};

	const urlName = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
	return (
		<>
			<div className="sidebar-main-section">
				<div className="brand-title d-xl-block d-none">
					<Link to="/dashboard">
						<img src={Logo} alt="" />
					</Link>
				</div>
				<div className="sidebar-main-section-inner">
					<ul className="sidebar-main-inner-menu">
						<li
							onClick={() => {
								sidebar_change("dashboard");
							}}
						>
							<Link to="/dashboard" className={urlName === "dashboard" ? "active" : ""}>
								<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M24 11.148L22.639 12.613L12 2.73L1.361 12.598L0 11.133L12 0L24 11.148ZM20 12.897L18 23H6L4 12.897L12 5.453L20 12.897ZM13 19C13 18.448 12.552 18 12 18C11.448 18 11 18.448 11 19C11 19.552 11.448 20 12 20C12.552 20 13 19.552 13 19ZM14 14C14 12.895 13.104 12 12 12C10.896 12 10 12.895 10 14C10 15.105 10.896 16 12 16C13.104 16 14 15.105 14 14Z" fill="#6A6E83" />
								</svg>
								<span>Dashboard</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("hospital-list");
							}}
						>
							<Link to="/hospital-list" className={urlName === "hospital-list" ? "active" : ""}>
								<img src={HospitalsConsultation} alt="" />
								<span>Hospital</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("doctor-list");
							}}
						>
							<Link to="/doctor-list" className={urlName === "doctor-list" ? "active" : ""}>
								<img src={Doctors} alt="" />
								<span>Doctors</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("patient-list");
							}}
						>
							<Link to="/patient-list" className={urlName === "patient-list" ? "active" : ""}>
								<img src={Patient} alt="" />
								<span>Patient</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("flucenter-list");
							}}
						>
							<Link to="/flucenter-list" className={urlName === "flucenter-list" ? "active" : ""}>
								<img src={FluCenters} alt="" />
								<span>FLU Centers</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("appointments-list");
							}}
						>
							<Link to="/appointments-list" className={urlName === "appointments-list" ? "active" : ""}>
								<img src={Appointments} alt="" />
								<span>Appointments List</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("pharmacys");
							}}
						>
							<Link to="/pharmacys" className={urlName === "pharmacys" ? "active" : ""}>
								<img src={Pharmacys} alt="" />
								<span>Pharmacys</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("billing");
							}}
						>
							<Link to="/billing" className={urlName === "billing" ? "active" : ""}>
								<img src={Billing} alt="" />
								<span>Billing</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("consultation");
							}}
						>
							<Link to="/consultation" className={urlName === "consultation" ? "active" : ""}>
								<img src={HospitalsConsultation} alt="" />
								<span>Consultation</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("covid-updates");
							}}
						>
							<Link to="/covid-updates" className={urlName === "covid-updates" ? "active" : ""}>
								<img src={CovidUpdates} alt="" />
								<span>Covid Updates</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("admins");
							}}
						>
							<Link to="/admins" className={urlName === "admins" ? "active" : ""}>
								<img src={Admins} alt="" />
								<span>Admins</span>
							</Link>
						</li>
						<li
							onClick={() => {
								sidebar_change("settings");
							}}
						>
							<Link to="/settings" className={urlName === "settings" ? "active" : ""}>
								<img src={Settings} alt="" />
								<span>Settings</span>
							</Link>
						</li>
					</ul>
					<div className="sidebar-log-fix">
					<Link to="/login">
					<button type="button" className="border-0" >
							<img src={Logout} alt="" />
							<span>Log Out</span>
						</button>
					</Link>
						
					</div>
				</div>
			</div>
		</>
	);
}
