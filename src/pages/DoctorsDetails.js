import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "../components/UserLayout";
import StarRatings from 'react-star-ratings';
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import Doctor_info from "../images/doctor_info.png";
import patient_img from "../images/patient_img.png";

export default function DoctorsDetails() {

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
                              <Dropdown.Item href="/medical-admin/billing">
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

    const Pt_options = {
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
    const Patient_List = [
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
        {
            Patient_Name:"John Robinson",
            Age: "62 years old",
            Email: "john@patient.com",
            Gender: "Male",
            Treatment:"Malaria",
            Status:"Active"
        },
    ];

    const Pt_columns = [
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
                        <span className="ms-2">John Robinson</span>
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
              sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="">62 years old</span>;
                },
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
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="">Male</span>;
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
                            <div className="col-12">
                                <div className="comn-title-main">
                                    <h1 className="mb-0">Doctors Details</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="details-box-main">
                                            <div className="dash-top-box dr-details pb-xl-5 pb-0 details-main-box">
                                                <div className="row set-box-head border-0 mb-xl-5 mb-0">
                                                   <div className="col-12 d-sm-flex d-block user-info-hdr me-auto">
                                                        <div className="user-info-pro">
                                                            <img src={Doctor_info} alt="Doctor Details" />
                                                        </div>
                                                        <div className="ms-md-4 mt-3 mt-md-0">
                                                            <h3 className="mb-2">Dr. John Doe</h3>
                                                            <p className="dr-type">Cardiologist &bull; <span>3 years of experience</span></p>
                                                            <div className='rating-start'>
                                                                <StarRatings numberOfStars={1} starDimension="18px" starEmptyColor="#DFB300" />
                                                                <span>4.5 (37)</span>
                                                                <Link to="/reviews"><bdi>Reviews</bdi></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row detail-table-main">
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <table className="details-table mt-3">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Email Address :</td>
                                                                            <td>johndeo@gmail.com</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Mobile Number :</td>                                                                
                                                                            <td>+1 12345 67150</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Devices :</td>                                                                
                                                                            <td>12</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>State :</td>                                                                
                                                                            <td>New york, USA</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Gender :</td>                                                                
                                                                            <td>Choose your gender</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <table className="details-table table-details-2 mt-xxl-5 me-xxl-5">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>DOB :</td>
                                                                            <td>13/06/1998</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>City :</td>
                                                                            <td>New york</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Degree :</td>
                                                                            <td>New york, USA</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-3 ps-xl-0">
                                        <div className="dash-top-box details-box-main">
                                            <div className="clinic-info">
                                                <h3>Clinic Information</h3>
                                                <div className="row mb-3">
                                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                                        <table className="details-table mt-0">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Hospital :</td>
                                                                    <td>Dhaka Medical College Hospital</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Contact Number :</td>
                                                                    <td>+1 866 937 6652</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Website:</td>
                                                                    <td>johndoes.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>State :</td>
                                                                    <td>New york, USA</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Zipcode :</td>
                                                                    <td>Choose your gender</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Building Number :</td>
                                                                    <td>Choose your gender</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-xxl-6 col-lg-12 col-md-6">
                                                        <table className="details-table table-details-3 me-xxl-5">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Timeing :</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Monday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tuesday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Wednesday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Thursday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Friday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Saturday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sunday</td>
                                                                    <td>9am-5pm</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
                                                <h3>Account Details</h3>
                                                <div className="ac-details">
                                                    <div className="d-sm-flex justify-content-between">
                                                        <div>
                                                            <p>Bank Name :</p>
                                                            <p>Choose Bank</p>
                                                        </div>
                                                        <div className="me-3">
                                                            <p>Account Type :</p>
                                                            <p>Choose Bank</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>Account Holder Name:</p>
                                                        <p>Enter account holder name</p>
                                                    </div>
                                                    <div>
                                                        <p>Account Number :</p>
                                                        <p>Enter your account number</p>
                                                    </div>
                                                    <div>
                                                        <p>Routing Number :</p>
                                                        <p>+1 12345 67150</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 mb-3">
                                        <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr clinic-info d-flex align-items-center">
                                                <h3>Transations</h3>
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
                                        <MUIDataTable data={Patient_List} columns={Pt_columns} options={Pt_options} />
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
