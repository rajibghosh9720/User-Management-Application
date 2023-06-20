import React from "react";
import "./View_User.css";

const View_User = ({ users, deleteUser, editUser }) => {
  return (
    <div className="user-list-container">
      <h2 className="user-list-header">View User List</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <div className="button-container">
              <button className="edit-button" onClick={() => editUser(user)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_User;
