import { FaPhone, FaRegTrashCan, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <li className={style.item}>
      <div className={style.wrapper}>
        <p className={style.text}>
          <FaUser />
          {contact.name}
        </p>
        <p className={style.text}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button className={style.button} onClick={handleDelete}>
        <FaRegTrashCan />
      </button>

      {showModal && (
        <Modal
          contact={contact}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </li>
  );
}

export default Contact;
