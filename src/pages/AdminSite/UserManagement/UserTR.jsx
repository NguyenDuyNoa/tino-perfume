import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableCell, StyledTableRow } from "../../../styles/styled-table";

const UserTR = ({ item, handleDelete}) => {

  return (
    <StyledTableRow>
      <StyledTableCell align="center">{item.id}</StyledTableCell>
      <StyledTableCell align="center">{item.userName}</StyledTableCell>
      <StyledTableCell align="center">{item.fullName}</StyledTableCell>
      <StyledTableCell align="center">{item.email}</StyledTableCell>
      <StyledTableCell align="center">
        {item.isAdmin ? "Admin" : "User"}
      </StyledTableCell>
      <StyledTableCell align="center">
        <div className="flex justify-center gap-2 ">
          <div
            onClick={handleDelete}
            className="bg-blue-500 rounded w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <DeleteIcon style={{ color: "white" }} />
          </div>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default UserTR;
