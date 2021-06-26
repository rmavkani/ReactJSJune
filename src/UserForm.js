import React from "react";

class UserForm extends React.Component {
  state = { name: "", mail: "" };
  addUser = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.mail === "") {
      alert("mandatory fields");
      return;
    }
    this.props.addUserDetails(this.state);
    this.setState({ name: "", mail: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2> Add Users </h2>
        <form className="ui form" onSubmit={this.addUser}>
          <div className="field">
            <label>User Name </label>
            <input
              type="text"
              name="user name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="User Name"
            />
          </div>
          <div className="field">
            <label>MailId </label>
            <input
              type="text"
              name="mail"
              onChange={(e) => this.setState({ mail: e.target.value })}
              placeholder="Mail Id"
              value={this.state.mail}
            />
          </div>
          <button className="ui button blue">Save User</button>
        </form>
      </div>
    );
  }
}
export default UserForm;
