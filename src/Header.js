import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>Seyon Homoeo Clinic, {this.props.place} </h3>
      </div>
    );
  }
}
export default Header;
