import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/common/Login";
import ForgotPassword from "./pages/common/ForgotPassword";
import OtpVerification from "./pages/common/OtpVerification";
import ResetPassword from "./pages/common/ResetPassword";
import Dashboard from "./pages/Dashboard";
import HospitalList from "./pages/HospitalList";
import DoctorList from "./pages/DoctorList";
import PatientList from "./pages/PatientList";
import FluCenterList from "./pages/FlucenterList";
import AppointmentsList from "./pages/AppointmentsList";
import Pharmacys from "./pages/Pharmacys";
import Billing from "./pages/Billing";
import Consultation from "./pages/Consultation";
import CovidUpdates from "./pages/CovidUpdates";
import Admins from "./pages/Admins";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import AdminEdit from "./pages/AdminEdit";
import ConsultationDetails from "./pages/ConsultationDetails";
import BillingDetails from "./pages/BillingDetails";
import HospitalDetails from "./pages/HospitalDetails";
import FluCentersDetails from "./pages/FluCentersDetails";
import PharmacysDetails from "./pages/PharmacysDetails";
import Reviews from "./pages/Reviews";
import DoctorsDetails from "./pages/DoctorsDetails";
import PatientDetails from "./pages/PatientDetails";
import ConsultationMedicalId from "./pages/ConsultationMedicaLId";
import AppointmentsDetails from "./pages/AppointmentsDetails";

export class RoutesMain extends Component {
	render() {
		return (
			<>
				<BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
					<Routes>
						<Route path="/" exact element={<Login />} />
						<Route path="/login" exact element={<Login />} />
						<Route path="/forgot-password" exact element={<ForgotPassword />} />
						<Route path="/otp-verification" exact element={<OtpVerification />} />
						<Route path="/reset-password" exact element={<ResetPassword />} />
						<Route path="/dashboard" exact element={<Dashboard />} />
						<Route path="/hospital-list" exact element={<HospitalList />} />
						<Route path="/doctor-list" exact element={<DoctorList />} />
						<Route path="/patient-list" exact element={<PatientList />} />
						<Route path="/flucenter-list" exact element={<FluCenterList />} />
						<Route path="/appointments-list" exact element={<AppointmentsList />} />
						<Route path="/pharmacys" exact element={<Pharmacys />} />
						<Route path="/billing" exact element={<Billing />} />
						<Route path="/consultation" exact element={<Consultation />} />
						<Route path="/covid-updates" exact element={<CovidUpdates />} />
						<Route path="/admins" exact element={<Admins />} />
						<Route path="/settings" exact element={<Settings />} />
						<Route path="/notification" exact element={<Notification />} />
						<Route path="/admin-edit" exact element={<AdminEdit />} />
						<Route path="/consultation-details" exact element={<ConsultationDetails />} />
						<Route path="/billing-details" exact element={<BillingDetails />} />
						<Route path="/hospital-details" exact element={<HospitalDetails />} />
						<Route path="/flu-centers-details" exact element={<FluCentersDetails />} />
						<Route path="/pharmacys-details" exact element={<PharmacysDetails />} />
						<Route path="/reviews" exact element={<Reviews />} />
						<Route path="/doctorsdetails" exact element={<DoctorsDetails />} />
						<Route path="/patient-details" exact element={<PatientDetails />} />
						<Route path="/consultation-medical-Id" exact element={<ConsultationMedicalId />} />
						<Route path="/appointments-details" exact element={<AppointmentsDetails />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}

export default RoutesMain;
