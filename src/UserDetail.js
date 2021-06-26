import React from "react";

const UserDetail = (props) => {
  const { id, name, mail } = props.user;
  return (
    <div>
      {name} and {mail}
    </div>
  );
};
export default UserDetail;
