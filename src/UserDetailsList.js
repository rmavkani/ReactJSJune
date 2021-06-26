import React from "react";
import UserDetail from "./UserDetail";

const UserDetailsList = (props) => {
  console.log(props);
  const renderUD = props.users.map((user) => {
    return <UserDetail user={user} />;
  });
  return <div> {renderUD}</div>;
};

export default UserDetailsList;
