import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import UserRegistration from "./UserRegistration";
import UserList from "./UserList";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers([...users, { id: uuid(), ...user }]);
  };

  const deleteUserHandler = (id) => {
    const newUserlist = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserlist);
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
      <Router>
        <Header place="Chennai-92" />

        <UserRegistration addUserHandler={addUserHandler} />
        <UserList users={users} getUserId={deleteUserHandler} />
        <Contact phone="9742237223" />
        <Footer website="https://seyon-homoeo-clinic.business.site/" />
      </Router>
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
