import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import pharmacys_img from "../images/pharmacys.png";
import React from "react";

export default function pharmacys() {
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
	const Hospital_List = [
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
		{
			Patient_Name: "Mrs.John Doe",
			Address: "241 W 57th St",
			Website: "xeron.com",
			Contact_No: "077 2112 9796",
			Timing: "9 Am - 5 Pm",
		},
	];
	const columns = [
		{
			name: "Patient_Name",
			label: "Patient Name",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({ className: "table-bold-font" }),
				customBodyRender: (value, dataIndex, rowIndex) => {
					return (
						<div className="d-flex align-items-center">
							<img src={pharmacys_img} alt="product" className="img-fluid" />
							<span className="ms-2">Mrs.John Doe</span>
						</div>
					);
				},
			},
		},
		{
			name: "Address",
			label: "Address",
			options: {
				filter: false,
				sort: true,
				customBodyRenderLite: (dataIndex) => {
					return <span className="">241 W 57th St</span>;
				},
			},
		},
		{
			name: "Website",
			label: "Website",
			options: {
				filter: false,
				sort: true,
			},
		},

		{
			name: "Contact_No",
			label: "Contact No",
			options: {
				filter: false,
				sort: true,
				customBodyRenderLite: (dataIndex) => {
					return <span className="">077 2112 9796</span>;
				},
			},
		},

		{
			name: "Timing",
			label: "Timing",
			options: {
				filter: false,
				sort: true,
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
									<Dropdown.Item href="/medical-admin/pharmacys-details">
										<bdi className="d-flex align-items-center">
											<span className="ms-2">Edit</span>
										</bdi>
									</Dropdown.Item>
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
											<div className="cmn-title-class d-sm-flex align-items-center py-0 px-3">
												<h1>Pharmacys</h1>
											</div>
										</div>
										<div className="col-12">
											<div className="bx-white-main">
												<MUIDataTable data={Hospital_List} columns={columns} options={options} className="pt-md-1 pt-3" />
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
