import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch } from "../../redux/hooks";
import { Contact } from "../../redux/types/contacts";
import { addContact } from "../../redux/contactsOps";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(22, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Неправильний формат номера телефону. Введіть у форматі 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});

// const enum initialValues = {
//   name = "";
//   number = "";
// };
interface FormValues {
  name: string;
  number: string;
}

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const userNameId = useId();
  const userNumber = useId();

  const handleSubmit = (values: FormValues, actions: any) => {
    // dispatch(addContact(values));
    const newContact = {
      ...values,
      id: new Date().toISOString(),
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik<FormValues>
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.formWrap}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            type="text"
            className={css.formInput}
            name="name"
            id={userNameId}
          />
          <ErrorMessage
            className={css.formError}
            name="name"
            component="span"
          />
        </div>

        <div className={css.formWrap}>
          <label htmlFor={userNumber}>Number</label>
          <Field
            type="tel"
            className={css.formInput}
            name="number"
            id={userNumber}
          />
          <ErrorMessage
            className={css.formError}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsOps";
// import { useId } from "react";
// import * as Yup from "yup";
// import css from "./ContactForm.module.css";

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(22, "Too Long!")
//     .required("Required"),
//   number: Yup.string()
//     .matches(
//       /^\d{3}-\d{2}-\d{2}$/,
//       "Неправильний формат номера телефону. Введіть у форматі 123-45-67"
//     )
//     .min(9, "Too Short!")
//     .max(9, "Too Long!")
//     .required("Required"),
// });

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const userNameId = useId();
//   const userNumber = useId();

//   const handleSubmit = (values, actions) => {
//     dispatch(addContact(values));
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form className={css.formContainer}>
//         <div className={css.formWrap}>
//           <label htmlFor={userNameId}>Name</label>
//           <Field
//             type="text"
//             className={css.formInput}
//             name="name"
//             id={userNameId}
//           />
//           <ErrorMessage
//             className={css.formError}
//             name="name"
//             component="span"
//           />
//         </div>

//         <div className={css.formWrap}>
//           <label htmlFor={userNumber}>Number</label>
//           <Field
//             type="tel"
//             className={css.formInput}
//             name="number"
//             id={userNumber}
//           />
//           <ErrorMessage
//             className={css.formError}
//             name="number"
//             component="span"
//           />
//         </div>

//         <button type="submit" className={css.formBtn}>
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }
