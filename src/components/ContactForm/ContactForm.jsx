import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const phoneNumber = /^\+380\d{9}$/;

const AddContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(phoneNumber, "Invalid phone number. Phone must be +380XXXXXXXXX")
    .required("Number is required"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>🙍‍♂️Name:</span>
          <Field type="text" name="name" className={css.inputContact} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          <span>📱Number:</span>
          <Field type="text" name="number" className={css.inputContact} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit" className={css.buttonForm}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
