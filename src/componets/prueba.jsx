// import { useState } from "react";
// import { Button, Form, Col, InputGroup } from "react-bootstrap";
// import BlogDataService from "../services/BlogService.js";
// import { Formik } from "formik";
// import * as yup from 'yup'
// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   file: yup.mixed().required(),
//   terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
// });

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setCreateNote({ ...createNote, [name]: value });
// };

// const save = () => {
//   let data = {
//     img: createNote.img,
//     title: createNote.title,
//     paragraph: createNote.paragraph,
//     category: createNote.category,
//     author: createNote.author,
//     coAuthor: createNote.coAuthor,
//   };

//   console.log(data);

//   BlogDataService.createNote(data)
//     .then((response) => {
//       setCreateNote({
//         img: response.data.img,
//         title: response.data.title,
//         paragraph: response.data.paragraph,
//         category: response.data.category,
//         author: response.data.author,
//         coAuthor: response.data.coAuthor,
//       })
//     })
//     .catch((err) => console.log(err));
// };

// const [validated, setValidated] = useState(false);

// const handleSubmitted = (event) => {
//   const form = event.currentTarget;
//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   setValidated(true);
// };

// function FormExample() {
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         file: null,
//         terms: false,
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik101">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik102">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid" tooltip>
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>
//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik103">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik104">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik105">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.File
//               className="position-relative"
//               required
//               name="file"
//               label="File"
//               onChange={handleChange}
//               isInvalid={!!errors.file}
//               feedback={errors.file}
//               id="validationFormik107"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik106"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//       );
//     }
    
// export default FormExample