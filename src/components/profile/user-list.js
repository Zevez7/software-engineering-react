import { Delete } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

export const UserList = ({ users, deleteUser }) => {
  return (
    <div className="list-group">
      {users.map((user) => {
        return (
          <Link
            className="list-group-item"
            key={user._id}
            to={`/home/${user._id}`}
          >
            <span className="fs-3">{user.username}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                deleteUser(user._id);
              }}
              className="btn btn-danger fa-pull-right"
            >
              <Delete />
            </button>
          </Link>
        );
      })}
    </div>
  );
};
