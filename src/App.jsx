import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  return (
    <div>
      <h1>Contact Book</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
