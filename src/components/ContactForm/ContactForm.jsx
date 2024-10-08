import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import style from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <div className={style.wrapper}>
          <label className={style.label}>
            Name
            <Field className={style.input} type="text" name="name" />
          </label>
          <ErrorMessage
            className={style.message}
            name="name"
            component="span"
          />
        </div>
        <div className={style.wrapper}>
          <label className={style.label}>
            Number
            <Field className={style.input} type="text" name="number" />
          </label>
          <ErrorMessage
            className={style.message}
            name="number"
            component="span"
          />
        </div>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
