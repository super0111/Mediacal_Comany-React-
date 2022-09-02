import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import country_img from "../images/country.png";
import React from "react";

export default function Covid_Updates() {

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
    const Covid_Updates = [
        {
            Country:"India", 
            Cases:"35708442",
            New_Cases:"0",
            Deaths:"483936",
            New_Deaths:"0",
            Recoverd:"34500172",
            Active:"724334",
            Critical:"8944",
            Tested:"691575352"
        },
        {
            Country:"Italy", 
            Cases:"7436939",
            New_Cases:"0",
            Deaths:"139038",
            New_Deaths:"0",
            Recoverd:"5353922",
            Active:"1943979",
            Critical:"8944",
            Tested:"148159131"
        },   
        {
            Country:"India", 
            Cases:"35708442",
            New_Cases:"0",
            Deaths:"483936",
            New_Deaths:"0",
            Recoverd:"34500172",
            Active:"724334",
            Critical:"8944",
            Tested:"691575352"
        },
        {
            Country:"Italy", 
            Cases:"7436939",
            New_Cases:"0",
            Deaths:"139038",
            New_Deaths:"0",
            Recoverd:"5353922",
            Active:"1943979",
            Critical:"8944",
            Tested:"148159131"
        },   
        {
            Country:"India", 
            Cases:"35708442",
            New_Cases:"0",
            Deaths:"483936",
            New_Deaths:"0",
            Recoverd:"34500172",
            Active:"724334",
            Critical:"8944",
            Tested:"691575352"
        },
        {
            Country:"Italy", 
            Cases:"7436939",
            New_Cases:"0",
            Deaths:"139038",
            New_Deaths:"0",
            Recoverd:"5353922",
            Active:"1943979",
            Critical:"8944",
            Tested:"148159131"
        },   
        {
            Country:"India", 
            Cases:"35708442",
            New_Cases:"0",
            Deaths:"483936",
            New_Deaths:"0",
            Recoverd:"34500172",
            Active:"724334",
            Critical:"8944",
            Tested:"691575352"
        },
        {
            Country:"Italy", 
            Cases:"7436939",
            New_Cases:"0",
            Deaths:"139038",
            New_Deaths:"0",
            Recoverd:"5353922",
            Active:"1943979",
            Critical:"8944",
            Tested:"148159131"
        },   
        {
            Country:"India", 
            Cases:"35708442",
            New_Cases:"0",
            Deaths:"483936",
            New_Deaths:"0",
            Recoverd:"34500172",
            Active:"724334",
            Critical:"8944",
            Tested:"691575352"
        },
        {
            Country:"Italy", 
            Cases:"7436939",
            New_Cases:"0",
            Deaths:"139038",
            New_Deaths:"0",
            Recoverd:"5353922",
            Active:"1943979",
            Critical:"8944",
            Tested:"148159131"
        },   
    ];
    const columns = [
        {
            name: "Flag",
            label: "Flag",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "table-bold-font" }),
                customBodyRender: (value, dataIndex, rowIndex) => {
                    return (
                      <div className="d-flex align-items-center">
                        <img src={country_img} alt="product" className="img-fluid table-img-rmv-radius" />
                      </div>
                    );
                  },
            },
        },
        {
            name: "Country",
            label: "Country",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Cases",
            label: "Cases",
            options: {
                filter: false,
                sort: true,
            },
        },
         {
            name: "New_Cases",
            label: "New Cases",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Deaths",
            label: "Deaths",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "New_Deaths",
            label: "New Deaths",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Recoverd",
            label: "Recoverd",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Active",
            label: "Active",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Critical",
            label: "Critical",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "Tested",
            label: "Tested",
            options: {
                filter: true,
                sort: true,
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
                                            <h1>Covid Updates</h1>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="bx-white-main covid-update-table">
                                            <MUIDataTable data={Covid_Updates} columns={columns} options={options} className="pt-md-1 pt-3 remove-radius" />
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
  )
}
