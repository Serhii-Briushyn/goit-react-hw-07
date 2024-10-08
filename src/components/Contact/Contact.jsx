import { FaPhone, FaRegTrashCan, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import style from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

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

      <button
        className={style.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <FaRegTrashCan />
      </button>
    </li>
  );
}

export default Contact;
