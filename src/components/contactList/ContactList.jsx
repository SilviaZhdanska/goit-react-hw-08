import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const loading = useSelector((state) => state.contacts.loading);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  const handleDeleteClick = (id) => {
    setContactToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contactToDelete));
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteClick(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
