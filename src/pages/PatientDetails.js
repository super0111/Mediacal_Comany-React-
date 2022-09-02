import React from "react";
import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import patient_img from "../images/patient_img.png";
import pt_detail_img from "../images/pt-detail.png";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function PatientDetails() {

    const Tr_option = {
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
    const Transations = [
        {
            No : 1,
            Transation_Id:"#152931898445",
            Date: "1/17/2022",
            Status:"Successful",
            Price: "$19.49",
        },
        {
            No : 2,
            Transation_Id:"#152931898445",
            Date: "1/17/2022",
            Status:"Successful",
            Price: "$19.49",
        },
        {
            No : 3,
            Transation_Id:"#152931898445",
            Date: "1/17/2022",
            Status:"Successful",
            Price: "$19.49",
        },
        {
            No : 4,
            Transation_Id:"#152931898445",
            Date: "1/17/2022",
            Status:"Successful",
            Price: "$19.49",
        },
    ];
    const Tr_columns = [
        {
            name: "No",
            label: "No.",
            options: {
              filter: true,
              sort: true,
              setCellProps: () => ({ className: "table-bold-font" }),
                customBodyRender: (value, dataIndex, rowIndex) => {
                    return (
                      <div className="d-flex align-items-center">
                        <span className="me-3">1</span>
                        <img src={patient_img} alt="product" className="img-fluid" />
                      </div>
                    );
                  },
              
            },
          },
        {
            name: "Transation_Id",
            label: "Transation Id",
            options: {
              filter: true,
              sort: true,
            },
          },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: true,
            },
        },

        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class status-successful">Successful</span>;
                },
            },
        },
        {
            name: "Price",
            label: "Price",
            options: {
                filter: true,
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
                              <Dropdown.Item href="/medical-admin/doctorsdetails">
                                  <bdi className="d-flex align-items-center">
                                    <span className="ms-2">View Details</span>
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
    const Appointments = [
        {
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "Voice Call ",
            Treatment:"Malaria",
            Status:"Pending",
        },
        {
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "In House",
            Treatment:"Malaria",
            Status:"Pending",
        },{
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "Voice Call ",
            Treatment:"Malaria",
            Status:"Pending",
        },{
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "Voice Call ",
            Treatment:"Malaria",
            Status:"Pending",
        },{
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "Voice Call ",
            Treatment:"Malaria",
            Status:"Pending",
        },{
            Patient_Name:"Mrs.John Doe",
            Age : "62 years old",
            Email:"john@patient.com",
            Gender:"Male",
            Appointments_Tyap: "Voice Call ",
            Treatment:"Malaria",
            Status:"Pending",
        }
    ];
    const columns = [
        {
            name: "Patient_Name",
            label: "Patient Name",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
                customBodyRender: (value, dataIndex, rowIndex) => {
                    return (
                      <div className="d-flex align-items-center">
                        <img src={patient_img} alt="product" className="img-fluid" />
                        <span className="ms-2">Mrs.John Doe</span>
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
              filter: true,
              sort: true,
              
            },
          },
          {
            name: "Gender",
            label: "Gender",
            options: {
              filter: true,
              sort: true,
              
            },
          },
        {
            name: "Appointments_Tyap",
            label: "Appointments Tyap",
            options: {
              filter: false,
              sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="">Voice Call </span>;
                },
            },
          },
        {
            name: "Treatment",
            label: "Treatment",
            options: {
                filter: false,
                sort: true,
            },
        },

        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class status-pending">Pending</span>;
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
                            <div className="col-12 mb-3">
                                <div className="details-box-main pt-3">
                                    <div className="dash-top-box dr-details">
                                        <div className="set-box-head-2">
                                            <div className="col-12">
                                                <div className="comn-title-main pt-0 pb-2">
                                                    <h1 className="mb-0">Patient Details</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xxl-6 pe-3">
                                                <div className="d-block user-info-hdr me-auto">
                                                    <div className="row">
                                                        <div className="col-md-6 pe-xxl-0 text-center">
                                                            <div className="user-info-img mt-3">
                                                            <img src={pt_detail_img} alt="Doctor Details" />
                                                        </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="row user-info-add text-start">
                                                                <div className="col-12">
                                                                    <p>Full Name</p>
                                                                    <p>Mrs. John Doe</p>
                                                                </div>
                                                                <div className="col-md-6 pe-0">
                                                                    <div>
                                                                        <p>Sex</p>
                                                                        <p>Male</p>
                                                                    </div>
                                                                    <div>
                                                                        <p>My Blood group</p>
                                                                        <p><span>O+</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pe-0">
                                                                    <div>
                                                                        <p>Gender</p>
                                                                        <p>Male</p>
                                                                    </div>
                                                                    <div>
                                                                        <p>DOB</p>
                                                                        <p>06/13/1998</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <p>Height</p>
                                                                            <p>5.7’’</p>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <p>Weight</p>
                                                                            <p>163 Pound</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6">
                                                <div className="user-info-add row">
                                                    <div className="col-md-6 pe-0">
                                                        <p>Email Address</p>
                                                        <p>johndoes.com</p>
                                                    </div>
                                                    <div className="col-md-6 pe-0 ps-sm-2">
                                                        <p>Contact number</p>
                                                        <p>+1 866 937 6652</p>
                                                    </div>
                                                    <div className="col-12 pe-0">
                                                        <p>Address</p>
                                                        <p>63210 Olby Mount Sinai Beth Israel Hospital, France</p>
                                                    </div>
                                                    <div className="col-12 pe-0">
                                                        <p>Medical Note</p>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-xxl-5 mb-3">
                                        <div className="dash-top-box">
                                            <div className="clinic-info">
                                                <h3>Health Insurances</h3>
                                                <div className="ac-details row">
                                                    <div className="col-md-6">
                                                        <div>
                                                            <p>Insurance Provide</p>
                                                            <p>Centene</p>
                                                        </div>
                                                        <div className="me-4">
                                                            <p>Insurance Type :</p>
                                                            <p>Choose Bank</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div>
                                                            <p>Insurance ID</p>
                                                            <p>#985-961-259-46</p>
                                                        </div>
                                                        <div className="me-5 pe-4">
                                                            <p>Validation</p>
                                                            <p>Life-Time</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>Insurance Note</p>
                                                                <p className=""><ReactReadMoreReadLess
                                                                    charLimit={200}
                                                                    readMoreText={"Read more"}
                                                                    readLessText={"Read less"}
                                                                >
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                                </ReactReadMoreReadLess></p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>Routing Number :</p>
                                                                <p>+1 12345 67150</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 mb-3 ps-xxl-0">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr clinic-info d-flex align-items-center">
                                                <h3>Transations List</h3>
                                            </div>
                                            <div className="bx-white-main transations-table-box">
                                                <MUIDataTable data={Transations} columns={Tr_columns} options={Tr_option} className="pt-0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="dash-part-hdr">
                                    <div className="dash-part-table-hdr clinic-info d-flex align-items-center">
                                        <h3>Patient List</h3>
                                    </div>
                                    <div className="bx-white-main transations-table-box">
                                        <MUIDataTable data={Appointments} columns={columns} options={options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </UserLayout>
    </>
  )
}
