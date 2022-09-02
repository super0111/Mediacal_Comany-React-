import React from "react";
import UserLayout from "../components/UserLayout";
import patient_billing from "../images/pt-billing.png";

export default function BillingDetails() {
    return (
        <>
            <UserLayout>
                <div className="content-wrapper-section">
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="col-xxl-9 order-1 order-xxl-0">
                                <div className="dash-top-box border-0">
                                    <div className="col-12">
                                        <div className="comn-title-main border-bottom py-3">
                                            <h1 className="mb-0">Billing Details</h1>
                                        </div>
                                    </div>
                                    <div className="pay-info-top">
                                        <div className="set-box-head mb-4 pb-4">
                                            <div className="pay-main-part">
                                                <div className="d-sm-flex d-block align-items-center">
                                                    <div className="mt-3">
                                                        <div className="d-md-flex d-block user-info-hdr me-auto">
                                                            <div className="user-info-pro">
                                                                <img src={patient_billing} alt="Doctor Details" />
                                                            </div>
                                                            <div className="ms-md-4 mt-3 mt-md-0 user-info-box">
                                                                <h3 className="mb-2">Dr. John Doe</h3>
                                                                <p>
                                                                    Transgender Male . 29 years . <span> O+</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pay-comn-text-2 ms-sm-auto mt-sm-3 mt-0">
                                                        <div className="align-items-center d-flex justify-content-center mb-2">
                                                            <bdi>Type :</bdi>
                                                            <div className="ps-md-5 ps-4 ms-md-0 ms-3">
                                                                <span className="text-black ms-4">Online Consultaion</span>
                                                            </div>
                                                        </div>
                                                        <div className="align-items-center d-flex mb-2 ms-sm-0 ms-4 ps-3 ps-sm-0">
                                                            <bdi>Inovice Date :</bdi>
                                                            <div className="ps-1 ps-md-0">
                                                                <span className="text-black ms-md-3 ms-2">01/18/2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="set-box-head border-0">
                                            <div className="d-md-flex d-block">
                                                <div className="me-auto">
                                                    <div className="pay-comn-text">
                                                        <div>About Treatment</div>
                                                        <div className="comn-text-box">
                                                            <p>Hair & Scalp</p>
                                                            <p>The Medical Company</p>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            <p>01/18/2022 5:20PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="payment-table payment-table-1 table-responsive mt-3 mt-sm-0">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Payment Method :</th>
                                                                <th>Credit/Debit Card</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Card Holder Name :</td>
                                                                <td>Mr. John Doe</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Card Number :</td>
                                                                <td>**** **** **** ****</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Expiry Date :</td>
                                                                <td>01/22/2022</td>
                                                            </tr>
                                                            <tr>
                                                                <td>CVV</td>
                                                                <td>****</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-table table-responsive">
                                        <table className="table mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Task Description</th>
                                                    <th scope="col">Rate</th>
                                                    <th scope="col">Months</th>
                                                    <th scope="col">Totals</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Lorem Ipsum</td>
                                                    <td>$19.49</td>
                                                    <td>1</td>
                                                    <td>$19.49</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="pay-comn-text px-2">
                                        <p>(January 17 2022 - February 17 2022)</p>
                                    </div>
                                    <div className="py-4 p-sm-4">
                                        <div className="d-sm-flex">
                                            <div className="pay-comn-text ms-auto">
                                                <div className="set-box-head">
                                                    <div>Billing Details</div>
                                                    <div className="d-flex mb-2 mt-2">
                                                        <bdi>Consultation Charge</bdi>
                                                        <div className="ms-auto ps-sm-5 ps-0">
                                                            <span className="text-black ms-sm-5 ms-0">$15.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <bdi>The Medical Company</bdi>
                                                        <div className="ms-auto ps-sm-5 ps-0">
                                                            <span className="text-black ms-sm-5 ms-0">$2.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <bdi>Discount</bdi>
                                                        <div className="ms-auto ps-5">
                                                            <span className="text-success ms-5">-$2.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <bdi>Taxt</bdi>
                                                        <div className="ms-auto ps-5">
                                                            <span className="text-black ms-5">$2.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex my-2">
                                                    <span className="text-black w-100">Total Amount</span>
                                                    <div className="ms-auto w-100 text-end">
                                                        <span>$20.20</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 mb-3">
                                <div className="dash-top-box border-0 h-auto">
                                    <div className="row">
                                        <div className="col-xxl-12 col-sm-4 my-1">
                                            <button type="button" className="btn-type-1 w-100">
                                                Download
                                            </button>
                                        </div>
                                        <div className="col-xxl-12 col-sm-4 my-1">
                                            <button type="button" className="btn-comn-class-3 w-100">
                                                Print
                                            </button>
                                        </div>
                                        <div className="col-xxl-12 col-sm-4 my-1">
                                            <button type="button" className="btn-comn-class-3 w-100">
                                                Share
                                            </button>
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
