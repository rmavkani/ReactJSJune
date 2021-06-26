import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h2>Seyon Homoeo Clinic </h2>
        <h4>{this.props.place} </h4>
      </div>
    );
  }
}
export default Header;
