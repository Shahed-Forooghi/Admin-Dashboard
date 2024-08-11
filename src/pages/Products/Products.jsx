// import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { products } from "../../data";

export default function Products() {
  const [rows, setRows] = useState(products);

  const productDeleteHandler = (productID) => {
    console.log(productID);
    let updateProducts = [...rows];

    updateProducts = updateProducts.filter((item) => {
      return item.id !== productID;
    });

    console.log(updateProducts);
    setRows(updateProducts);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Name",
      width: 230,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="flex items-center mt-2 gap-2">
            <img
              className="w-[40px] rounded-full h-[40px]"
              src={params.row.img}
              alt="prof-img"
            />
            <span className="font-bold text-sm">{params.row.name}</span>
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5 mt-5">
            <Link
              to={`/product/${params.row.id}`}
              className="text-white bg-green-600 h-5 flex items-center justify-center p-2 w-fit rounded-md"
            >
              Edit
            </Link>
            <button
              onClick={() => productDeleteHandler(params.row.id)}
              className="text-red-600 text-xl "
            >
              <MdDelete />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-[80%] m-5">
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          pageSizeOptions={[7]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
