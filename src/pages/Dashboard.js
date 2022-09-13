import UserLayout from "../components/UserLayout";
import React, { useEffect, useState } from "react";
import Dash_1 from "../images/dash-icon-1.svg";
import Dash_2 from "../images/dash-icon-2.svg";
import Dash_3 from "../images/dash-icon-3.svg";
import Dash_4_5 from "../images/dash-icon-4-5.svg";
import doctor_img from "../images/doctor_img.png";
import patient_img from "../images/patient_img.png";
import Chart from "react-apexcharts";
import MUIDataTable from "mui-datatables";
import { PostApi } from "../helper/APIService";
import { API_PATH } from "../const";
import toastr from "toastr";
import { Link } from "react-router-dom";

export default function Dashboard() {
	let value = new Date().toISOString();
	let result = value.indexOf("T");
	let time = value.substring(result);

	useEffect(() => {}, []);

	const initialValues = {
		startDate: "",
		endDate: "",
	};
	const [values, setValues] = useState(initialValues);
	const [graph, setGraph] = useState([]);
	const [sale, setSale] = useState(0);
	const [seller, setSeller] = useState(0);
	const [soldOut, setSoldOut] = useState(0);
	const [profit, setProfit] = useState(0);
	const [preparing, setPreparing] = useState(0);
	const [pending, setPending] = useState(0);
	const [lowStock, setLowStock] = useState(0);

	const getDashBoard = () => {
		let path = API_PATH.dashBoard;
		let data = {
			start: values.startDate + time,
			end: values.endDate + time,
		};
		const dashBoardPromise = new Promise((resolve, reject) => {
			resolve(PostApi(path, data));
		});
		dashBoardPromise.then((res) => {
			if (res) {
				if (res.data.success) {
					let data = res.data.data;
					setGraph(data.graph);
					setLowStock(data.lowStock);
					setProfit(data.profit);
					setSoldOut(data.soldOut);
					setSeller(data.topSeller);
					setSale(data.totalSale);
					toastr.success(res.data.message);
				} else {
					console.log(res);
					toastr.error(res.data.message);
				}
			}
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		if (values.endDate !== "") {
			getDashBoard();
		}
	};

	// const [rating, setRating] = useState(0)

	// const handleRating = (rate) => {
	//     setRating(rate)
	//     // other logic
	//   }

	const Recent_Queue_options = {
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
		sort: false,
		pagination: false,
		filter: false,
		filterType: "dropdown",
		toolbar: false,
		searchOpen: false,
		search: false,
	};
	const Latest_Patient = [
		{
			Name: "NY Medical Hospital",
			Age: "62 years old",
			Gender: "Male",
			Treatment: "Malaria",
		},
		{
			Name: "NY Medical Hospital",
			Age: "62 years old",
			Gender: "Male",
			Treatment: "Malaria",
		},
		{
			Name: "NY Medical Hospital",
			Age: "62 years old",
			Gender: "Male",
			Treatment: "Malaria",
		},
		{
			Name: "NY Medical Hospital",
			Age: "62 years old",
			Gender: "Male",
			Treatment: "Malaria",
		},
	];
	const Patient_columns = [
		{
			name: "Patient Name",
			label: "Patient Name",
			options: {
				filter: false,
				sort: false,
				customBodyRender: (value, dataIndex, rowIndex) => {
					return (
						<div className="d-flex align-items-center">
							<img src={patient_img} alt="product" className="img-fluid" />
							<span className="ms-2">Jay Soni</span>
						</div>
					);
				},
			},
		},
		{
			name: "Age",
			label: "Age",
			options: {
				filter: false,
				sort: false,
			},
		},
		{
			name: "Gender",
			label: "Gender",
			options: {
				filter: false,
				sort: false,
			},
		},
		{
			name: "Treatment",
			label: "Treatment",
			options: {
				filter: false,
				sort: false,
				setCellProps: () => ({ className: "table-bold-font" }),
			},
		},
	];

	const Doctor_list_options = {
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
		sort: false,
		pagination: false,
		filter: false,
		filterType: "dropdown",
		toolbar: false,
		searchOpen: false,
		search: false,
	};
	const Doctor_Name = [
		{
			Hospital_Name: "NY Medical Hospital",
			Experience: "5+ Experience",
			Specialist: "Cardiologist",
			Language: "English",
		},
		{
			Hospital_Name: "NY Medical Hospital",
			Experience: "5+ Experience",
			Specialist: "Cardiologist",
			Language: "English",
		},
		{
			Hospital_Name: "NY Medical Hospital",
			Experience: "5+ Experience",
			Specialist: "Cardiologist",
			Language: "English",
		},
		{
			Hospital_Name: "NY Medical Hospital",
			Experience: "5+ Experience",
			Specialist: "Cardiologist",
			Language: "English",
		},
	];
	const Hospital_Name_columns = [
		{
			name: "Doctor Name",
			label: "Doctor Name",
			options: {
				filter: false,
				sort: false,
				customBodyRender: (value, dataIndex, rowIndex) => {
					return (
						<div className="d-flex align-items-center">
							<img src={doctor_img} alt="product" className="img-fluid" />
							<span className="ms-2">Dr. Winston Caffrey</span>
						</div>
					);
				},
			},
		},
		{
			name: "Hospital_Name",
			label: "Hospital_Name",
			options: {
				filter: false,
				sort: false,
			},
		},
		{
			name: "Experience",
			label: "Experience",
			options: {
				filter: false,
				sort: false,
			},
		},
		{
			name: "Specialist",
			label: "Specialist",
			options: {
				filter: false,
				sort: false,
				setCellProps: () => ({ className: "table-bold-font" }),
			},
		},
		{
			name: "Language",
			label: "Language",
			options: {
				filter: false,
				sort: false,
			},
		},
	];

	const chart1 = {
		series: [
			{
				name: "Orders",
				data: [2, 4, 4, 6, 3, 5, 4],
			},
			{
				name: "View",
				data: [7, 9, 7, 9, 9, 10, 7],
			},
		],

		chart: {
			type: "bar",
			height: 300,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 9,
				columnWidth: "45%",
			},
		},
		colors: ["#EE9D26", "#3E55AB"],
		dataLabels: {
			enabled: false,
		},
		legend: {
			position: "top",
			horizontalAlign: "right",
			fontSize: "16px",
			fontFamily: "Dm sans",
			fontWeight: 500,
			color: "#6C6A81",

			markers: {
				radius: 3,
			},

			itemMargin: {
				horizontal: 15,
				vertical: 0,
			},
		},
		stroke: {
			show: true,
			width: 3,
			colors: ["transparent"],
		},
		xaxis: {
			categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

			axisBorder: {
				show: false,
			},

			axisTicks: {
				show: false,
			},
		},

		yaxis: {
			categories: ["0", "2", "4", "8", "10", "12"],
			labels: {
				formatter: function (val) {
					return val + "k";
				},
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val + "k";
				},
			},
		},
		grid: {
			show: true,
			borderColor: "rgba(35, 34, 34, .1)",
			strokeDashArray: 3,
			position: "back",
			yaxis: {
				lines: {
					show: true,
				},
			},
		},

		responsive: [
			{
				breakpoint: 540,
				options: {
					plotOptions: {
						bar: {
							borderRadius: 5,
						},
					},
				},
			},
			{
				breakpoint: 375,
				options: {
					plotOptions: {
						bar: {
							borderRadius: 3,
						},
					},
				},
			},
		],
	};
	const chart2 = {
		series: [70, 20, 10],
		chart: {
			height: 350,
			type: "donut",
			zoom: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
					},
					size: "60%",
				},
			},
		},
		dataLabels: {
			enabled: true,
		},
		legend: {
			position: "bottom",
			horizontalAlign: "center",
		},
		labels: ["Business plan", "Family plan ", "Free plan "],
		colors: ["#0C59EA", "#EFA220", "#152A3C"],
		stroke: {
			show: true,
			curve: "smooth",
			lineCap: "butt",
			width: 0,
			dashArray: 0,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val + "%";
				},
			},
		},
	};

	const chart3 = {
		series: [
			{
				name: "Hospital Statistics",
				data: [
					{
						x: 11,
						y: 1.5,
					},
					{
						x: 12,
						y: 1,
					},
					{
						x: 13,
						y: 4,
					},
					{
						x: 14,
						y: 1,
					},
					{
						x: 15,
						y: 5.5,
					},
					{
						x: 16,
						y: 2.5,
					},
					{
						x: 17,
						y: 7,
					},
					{
						x: 18,
						y: 5,
					},
					{
						x: 19,
						y: 7,
					},
				],
			},
		],
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100],
			},
			colors: ["#0066B91F"],
		},
		chart: {
			height: 350,
			type: "area",
			zoom: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#0C59EA"],
		stroke: {
			show: true,
			curve: "smooth",
			lineCap: "butt",
			width: 2,
			dashArray: 0,
		},
	};

	return (
		<>
			<UserLayout>
				<div className="content-wrapper-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="cmn-title-class d-xl-flex align-items-center py-1 py-md-3">
									<h1>Dashboard</h1>
								</div>
							</div>
							<div className="col-xl-12 pe-4">
								<div className="row justify-content-center">
									<div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
										<div className="dash-top-box">
											<span className="dash-span-1">
												<img src={Dash_1} alt="" />
											</span>
											<p>195</p>
											<div className="dash-top-box-info d-flex align-items-center">
												<bdi>Doctor</bdi>
											</div>
										</div>
									</div>
									<div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
										<div className="dash-top-box">
											<span className="dash-span-1">
												<img src={Dash_2} alt="" />
											</span>
											<p>25960</p>
											<div className="dash-top-box-info d-flex align-items-center">
												<bdi>Patient</bdi>
											</div>
										</div>
									</div>
									<div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
										<div className="dash-top-box">
											<span className="dash-span-2">
												<img src={Dash_3} alt="" />
											</span>
											<p>9631</p>
											<div className="dash-top-box-info d-flex align-items-center">
												<bdi>Bills</bdi>
											</div>
										</div>
									</div>
									<div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
										<div className="dash-top-box">
											<span className="dash-span-2">
												<img src={Dash_4_5} alt="" />
											</span>
											<p>21000</p>
											<div className="dash-top-box-info d-flex align-items-center">
												<bdi>Online consultation</bdi>
											</div>
										</div>
									</div>
									<div className="col-xxl col-xl-3 col-md-4 col-6 pe-0 mb-3">
										<div className="dash-top-box">
											<span className="dash-span-2">
												<img src={Dash_4_5} alt="" />
											</span>
											<p>21000</p>
											<div className="dash-top-box-info d-flex align-items-center">
												<bdi>Nurses</bdi>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="row me-0">
									<div className="col-xxl-5 mb-md-3 pe-0">
										<div className="dash-hdr-body-box">
											<div className="dash-hdr-body-box-hdr d-flex align-items-center">
												<span>Online consultation</span>
											</div>
											<div className="dash-hdr-body-box-body">
												<div className="chart-section-main">
													<Chart options={chart1} series={chart1.series} height={300} type="bar" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-xxl-7 mb-3 pe-0">
										<div className="row me-0">
											<div className="col-md-6 mt-3 mt-md-0 pe-0">
												<div className="dash-hdr-body-box">
													<div className="dash-hdr-body-box-hdr d-flex align-items-center">
														<span>Demographics</span>
														<bdi className="ms-auto text-primary">25960</bdi>
													</div>
													<div className="dash-hdr-body-box-body">
														<div className="chart-section-main">
															<Chart options={chart2} series={chart2.series} height={300} type="donut" />
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6 pe-0 mt-3 mt-md-0 pe-0">
												<div className="dash-hdr-body-box">
													<div className="dash-hdr-body-box-hdr d-flex align-items-center">
														<span>Hospital Statistics</span>
													</div>
													<div className="dash-hdr-body-box-body">
														<div className="chart-section-main">
															<Chart options={chart3} series={chart3.series} height={300} type="area" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 h-100">
								<div className="row me-0">
									<div className="col-xxl-4 mb-3 pe-0">
										<div className="dash-part-hdr">
											<div className="dash-part-table-hdr d-flex align-items-center">
												<span>Recent Queue</span>
												<div className="ms-auto">
													<Link to="/hospital-list">See All</Link>
												</div>
											</div>
											<div className="bx-white-main MuiPaper-root-table diff-head-table comnn-head-table diff-space-table">
												<MUIDataTable data={Latest_Patient} columns={Patient_columns} options={Recent_Queue_options} />
											</div>
										</div>
									</div>
									<div className="col-xxl-8 mb-3 pe-0">
										<div className="dash-part-hdr">
											<div className="dash-part-table-hdr d-flex align-items-center">
												<span>Doctor list</span>
												<div className="ms-auto">
													<Link to="/doctor-list">See All</Link>
												</div>
											</div>
											<div className="bx-white-main MuiPaper-root-table diff-head-table comnn-head-table">
												<MUIDataTable data={Doctor_Name} columns={Hospital_Name_columns} options={Doctor_list_options} />
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
