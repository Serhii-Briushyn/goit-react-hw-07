import ReactDOM from "react-dom";
import style from "./Modal.module.css";

function Modal({ contact, onConfirm, onCancel }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return ReactDOM.createPortal(
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <p>Are you sure you want to delete {contact.name}?</p>
        <div className={style.buttons}>
          <button className={style.confirmButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={style.cancelButton} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
