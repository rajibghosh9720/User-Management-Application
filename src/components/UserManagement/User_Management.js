import React, { useState } from "react";
import AddUserForm from "../AddUser/Add_User";
import UserList from "../ViewUser/View_User";
import EditUserForm from "../EditUser/Edit_User";
import "./User_Management.css";

const User_Management  = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rajib Ghosh",
      email: "rajibghosh9720@gmail.com",
      phone: "9733001122",
    },
    {
      id: 2,
      name: "Mr. Rajib Ghosh",
      email: "rghosh9720@gmail.com",
      phone: "7063445566",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditing(false);
    setCurrentUser(null);
  };

  const closeModal = () => {
    setIsEditing(false);
    setCurrentUser(null);
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">User Management Application using ReactJS</h1>
      </header>

      {isEditing ? (
        <EditUserForm
          user={currentUser}
          updateUser={updateUser}
          closeModal={closeModal}
        />
      ) : (
        <AddUserForm addUser={addUser} />
      )}
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default User_Management ;
