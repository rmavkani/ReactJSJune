import React from "react";
import UserDetail from "./UserDetail";

const UserList = (props) => {
  console.log(props);

  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };
  const renderUD = props.users.map((user) => {
    return (
      <UserDetail user={user} clickHandler={deleteUserHandler} key={user.id} />
    );
  });
  return <div className="ui celled list"> Registered Users {renderUD} </div>;
};

export default UserList;
