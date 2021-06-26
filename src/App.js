import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import UserForm from "./UserForm";
import UserDetailsList from "./UserDetailsList";
import { uuid } from "uuidv4";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);
  const addUserDetails = (user) => {
    setUsers([...users, { id: uuid(), ...user }]);
  };

  useEffect(() => {
    const retrieveUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setUsers(retrieveUser);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div className="ui container">
      <h1>Welcome!</h1>
      <Header place="Chennai" />
      <Footer doctorName="Ramya Devi T" />
      <Contact phone="9742237223" />
      <UserForm addUserDetails={addUserDetails} />
      <UserDetailsList users={users} />
    </div>
  );
}
export default App;

/*class App extends React.Component {
  constructor() {
    super();
    this.state = { doctorName: "Ramya Devi T" };
  }
  render() {
    return (
      <div className="ui container">
        <h1>Welcome!</h1>
        <Header place="Chennai" />
        <Footer doctorName={this.state.doctorName} />
        <Contact phone="9742237223" />
        <UserForm />
      </div>
    );
  }
} */
