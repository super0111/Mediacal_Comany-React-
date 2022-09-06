import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import patient_img from "../images/patient_img.png";
import { Offcanvas } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Admins() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const options = {
		page: 1,
		show: false,
		sizePerPage: 5,
		totalSize: 10,
		responsive: "standard",
		onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
		onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
		onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
		selectableRows: false,
		download: false,
		print: false,
		viewColumns: false,
		sort: true,
		pagination: true,
		filter: false,
		filterType: "dropdown",
		toolbar: false,
		searchOpen: false,
		search: false,
	};
	const Admins = [
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},

		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Doe",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.Chris Man",
			Age: "32 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.Sven",
			Age: "12 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
		{
			Admin_Name: "Mrs.John Does",
			Age: "62 years old",
			Email: "johndoe@patient.com",
			Role: "Admin",
		},
	];
	const columns = [
		{
			name: "Admin_Name",
			label: "Admin Name",
			options: {
				filter: false,
				sort: true,
				setCellProps: () => ({ className: "table-bold-font" }),
				customBodyRender: (value, dataIndex, rowIndex) => {
					return (
						<div className="d-flex align-items-center">
							<img src={patient_img} alt="product" className="img-fluid" />
							<span className="ms-2">Mr.John Doe</span>
						</div>
					);
				},
			},
		},

		{
			name: "Age",
			label: "Age",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: "Email",
			label: "Email Address",
			options: {
				filter: false,
				sort: true,
			},
		},
		{
			name: "Role",
			label: "Role",
			options: {
				filter: false,
				sort: true,
			},
		},
		{
			name: "Status",
			label: "Status",
			options: {
				filter: true,
				sort: true,
				customBodyRenderLite: (dataIndex) => {
					return <span className="comn-status-class status-active">Active</span>;
				},
			},
		},
		{
			label: "Action",
			name: "Action",
			options: {
				filter: false,
				sort: false,
				setCellProps: () => ({ className: "text-center" }),
				setCellHeaderProps: () => ({ className: "text-center" }),
				customBodyRenderLite: (dataIndex) => {
					return (
						<div className="table-ed-drop">
							<Dropdown drop="left">
								<Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
										<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
									</svg>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="/medical-admin/admin-edit">
										<bdi className="d-flex align-items-center">
											<span className="ms-2">Delete</span>
										</bdi>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					);
				},
			},
		},
	];

	return (
		<>
			<UserLayout>
				<div className="content-wrapper-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 mt-3">
								<div className="bx-white-main">
									<div className="bx-white-bg">
										<div className="col-12 mt-3">
											<div className="cmn-title-class d-flex align-items-center py-0 mx-3 ">
												<h1>Admins</h1>
												<div className="ms-auto d-block d-lg-inline">
													<button type="button" className="btn-type-1 w-100" variant="primary" onClick={handleShow}>
														Add Admin
													</button>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="bx-white-main">
												<MUIDataTable data={Admins} columns={columns} options={options} className="pt-md-1 pt-3" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Offcanvas show={show} onHide={handleClose} placement="end" className="add-admin-box-main">
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Add New Admin</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<form className="row">
									<div className="col-12 mb-3">
										<label className="d-block login-label-text mb-2">First Name</label>
										<input type="text" className="form-control login-comn-input px-3 bg-white" name="fname" placeholder="Jone" />
									</div>
									<div className="col-12 mb-3">
										<label className="d-block login-label-text mb-2">Last Name</label>
										<input type="text" className="form-control login-comn-input px-3 bg-white" name="lname" placeholder="Doe" />
									</div>
									<div className="col-12 mb-3">
										<label className="d-block login-label-text mb-2">Email Address</label>
										<input type="email" className="form-control login-comn-input px-3 bg-white" name="email" placeholder="Jonedoe@gmail.com" />
									</div>
									<div className="col-12 mb-3">
										<label className="d-block login-label-text mb-2">Role</label>
										<select className="form-select login-comn-input px-3 bg-white">
											<option>User Role</option>
											<option>Admin</option>
											<option>Sub Admin</option>
											<option>Contributor</option>
											<option>Staff</option>
										</select>
									</div>
									<div className="col-12 mb-3">
										<label className="d-block login-label-text mb-2">Default Password</label>
										<input type="password" className="form-control login-comn-input px-3 bg-white" name="password" placeholder="Enter Your Password" />
									</div>
									<div className="col-sm-6 mb-3">
										<Link to="/admin-edit">
											<button type="submit" className="btn-type-1 w-100">
												Add Admin
											</button>
										</Link>
									</div>
									<div className="col-sm-6 mb-3">
										<button type="button" className="btn-comn-class-2 w-100">
											Cancel
										</button>
									</div>
								</form>
							</Offcanvas.Body>
						</Offcanvas>
					</div>
				</div>
			</UserLayout>
		</>
	);
}
