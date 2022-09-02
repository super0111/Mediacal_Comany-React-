import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import hospital_img from "../images/hospital_img.png";
import React from "react";

export default function HospitalList() {
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
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "CTL Group",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Bayside Laboratories",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
            Address: "241 W 57th St",
            Website: "xeron.com",
            Contact_No: "077 2112 9796",
            Timing: "9 Am - 5 Pm",
        },
        {
            Patient_Name: "Xeron Clinical",
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
                        <div className="d-flex align-items-center table-image-class">
                            <img src={hospital_img} alt="product" className="img-fluid" />
                            <span className="ms-2">Xeron Clinical</span>
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
                                    <Dropdown.Item href="/medical-admin/hospital-details">
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
                                            <div className="cmn-title-class d-flex align-items-center py-0 px-3">
                                                <h1 className="pb-0">Hospital List</h1>
                                                <div className="ms-auto ms-4 d-block d-lg-inline">
                                                    <button type="button" className="btn-type-1 w-100 d-flex align-items-center">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                            <path d="M9 18C4.0372 18 0 13.9628 0 9C0 4.0372 4.0372 0 9 0C13.9628 0 18 4.0372 18 9C18 13.9628 13.9628 18 9 18ZM9 1.125C4.65752 1.125 1.125 4.65752 1.125 9C1.125 13.3425 4.65752 16.875 9 16.875C13.3425 16.875 16.875 13.3425 16.875 9C16.875 4.65752 13.3425 1.125 9 1.125Z" fill="white" />
                                                            <path d="M12.9375 9.5625H5.0625C4.752 9.5625 4.5 9.3105 4.5 9C4.5 8.6895 4.752 8.4375 5.0625 8.4375H12.9375C13.248 8.4375 13.5 8.6895 13.5 9C13.5 9.3105 13.248 9.5625 12.9375 9.5625Z" fill="white" />
                                                            <path d="M9 13.5C8.6895 13.5 8.4375 13.248 8.4375 12.9375V5.0625C8.4375 4.752 8.6895 4.5 9 4.5C9.3105 4.5 9.5625 4.752 9.5625 5.0625V12.9375C9.5625 13.248 9.3105 13.5 9 13.5Z" fill="white" />
                                                        </svg>
                                                        Add New
                                                    </button>
                                                </div>
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
