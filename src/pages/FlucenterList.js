import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import { Dropdown } from "react-bootstrap";
import flu_center_img from "../images/flu_center.png";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function FluCentersList() {
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
    const Flu_Center = [
        {
            Center_Name: "Xeron Clinical",
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
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
                customBodyRender: (value, dataIndex, rowIndex) => {
                    return (
                        <div className="d-flex align-items-center">
                            <img src={flu_center_img} alt="product" className="img-fluid" />
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
                                    <Dropdown.Item href="/medical-admin/flu-centers-details">
                                        <bdi className="d-flex align-items-center">
                                            <span className="ms-2">Edit</span>
                                        </bdi>
                                    </Dropdown.Item>
                                    <Dropdown.Item variant="primary" onClick={handleShow}>
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
                                                <h1 className="pb-0">Covid / FLU Centers List</h1>
                                                <div className="ms-auto d-block d-lg-inline">
                                                    <button type="button" className="btn-type-1 w-100 my-2 my-sm-0">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                                            <path d="M9 18C4.0372 18 0 13.9628 0 9C0 4.0372 4.0372 0 9 0C13.9628 0 18 4.0372 18 9C18 13.9628 13.9628 18 9 18ZM9 1.125C4.65752 1.125 1.125 4.65752 1.125 9C1.125 13.3425 4.65752 16.875 9 16.875C13.3425 16.875 16.875 13.3425 16.875 9C16.875 4.65752 13.3425 1.125 9 1.125Z" fill="white" />
                                                            <path d="M12.9375 9.5625H5.0625C4.752 9.5625 4.5 9.3105 4.5 9C4.5 8.6895 4.752 8.4375 5.0625 8.4375H12.9375C13.248 8.4375 13.5 8.6895 13.5 9C13.5 9.3105 13.248 9.5625 12.9375 9.5625Z" fill="white" />
                                                            <path d="M9 13.5C8.6895 13.5 8.4375 13.248 8.4375 12.9375V5.0625C8.4375 4.752 8.6895 4.5 9 4.5C9.3105 4.5 9.5625 4.752 9.5625 5.0625V12.9375C9.5625 13.248 9.3105 13.5 9 13.5Z" fill="white" />
                                                        </svg>
                                                        Add New Center
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="bx-white-main">
                                                <MUIDataTable data={Flu_Center} columns={columns} options={options} className="pt-md-1 pt-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose} animation={false} centered className="modal-box-main">
                            <Modal.Header>
                                <Modal.Title>
                                    <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="78.5" cy="78.5" r="76" stroke="#FF1515" stroke-width="5" />
                                        <path d="M100.312 53.5H88.625V51.375C88.625 47.8541 85.7709 45 82.25 45H73.75C70.2291 45 67.375 47.8541 67.375 51.375V53.5H55.6875C52.7535 53.5 50.375 55.8785 50.375 58.8125V63.0625C50.375 64.2362 51.3263 65.1875 52.5 65.1875H103.5C104.674 65.1875 105.625 64.2362 105.625 63.0625V58.8125C105.625 55.8785 103.246 53.5 100.312 53.5ZM71.625 51.375C71.625 50.2036 72.5786 49.25 73.75 49.25H82.25C83.4214 49.25 84.375 50.2036 84.375 51.375V53.5H71.625V51.375Z" fill="#FF1515" />
                                        <path d="M54.4082 69.4375C54.029 69.4375 53.7268 69.7544 53.7449 70.1332L55.498 106.928C55.6601 110.333 58.4571 113 61.8651 113H94.1359C97.5438 113 100.341 110.333 100.503 106.928L102.256 70.1332C102.274 69.7544 101.972 69.4375 101.593 69.4375H54.4082ZM86.5005 74.75C86.5005 73.5759 87.4514 72.625 88.6255 72.625C89.7995 72.625 90.7505 73.5759 90.7505 74.75V102.375C90.7505 103.549 89.7995 104.5 88.6255 104.5C87.4514 104.5 86.5005 103.549 86.5005 102.375V74.75ZM75.8755 74.75C75.8755 73.5759 76.8264 72.625 78.0005 72.625C79.1745 72.625 80.1255 73.5759 80.1255 74.75V102.375C80.1255 103.549 79.1745 104.5 78.0005 104.5C76.8264 104.5 75.8755 103.549 75.8755 102.375V74.75ZM65.2505 74.75C65.2505 73.5759 66.2014 72.625 67.3755 72.625C68.5495 72.625 69.5005 73.5759 69.5005 74.75V102.375C69.5005 103.549 68.5495 104.5 67.3755 104.5C66.2014 104.5 65.2505 103.549 65.2505 102.375V74.75Z" fill="#FF1515" />
                                    </svg>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3>Are you Sure?</h3>
                                <p>Do you really want to delete these records? This process cannot be undone.</p>
                            </Modal.Body>
                            <Modal.Footer className="row">
                                <div className="col-sm-12 mb-3">
                                    <div className="row ms-sm-5">
                                        <div className="col-sm-5 ms-lg-2 ms-md-0">
                                            <Button variant="secondary" onClick={handleClose} className="comn-btn-class btn-comn-class-3 w-100">
                                                Cancle
                                            </Button>
                                        </div>
                                        <div className="col-sm-5 mt-3 mt-sm-0">
                                            <Button variant="primary" onClick={handleClose} className="comn-btn-class btn-comn-class-4 w-100">
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
