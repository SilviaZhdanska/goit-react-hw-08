import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css";

function ContactsPage() {
  return (
    <div className={styles.contacts}>
      <h1>Your Contacts</h1>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
