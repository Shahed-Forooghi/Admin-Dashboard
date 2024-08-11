// import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import {users} from '../../data'



export default function Users() {
  const [rows, setRows] = useState(users);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={""} className="flex items-center mt-2 gap-2">
            <img
              className="w-[40px] rounded-full h-[40px]"
              src={params.row.img}
              alt="prof-img"
            />
            <span className="font-bold text-sm">{params.row.firstName}</span>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      // type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5 mt-5">
            <button className="text-white bg-green-600 h-5 flex items-center justify-center p-2 w-fit rounded-md">
              Edit
            </button>
            <button
              onClick={() => userDeleteHandler(params.row.id)}
              className="text-red-600 text-xl "
            >
              <MdDelete />
            </button>
          </div>
        );
      },
    },
  ];

  const userDeleteHandler = (userID) => {
    console.log(userID);
    let updateUsers = [...rows];

    updateUsers = updateUsers.filter((item) => {
      return item.id !== userID;
    });

    console.log(updateUsers);
    setRows(updateUsers);
  };

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
