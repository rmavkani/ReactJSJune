import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h6>Thank you, {this.props.website} </h6>{" "}
      </div>
    );
  }
}
export default Footer;
