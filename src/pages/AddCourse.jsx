import { useState } from "react";
import { Button, Form, Jumbotron, Row, Col } from "react-bootstrap";
import CoursesDataService from "../services/CourseService";

const AddCourse= () =>{
  const initialFormCourse = {
    img: "",
    name: "",
    introduction: "",
    description: "",
    duration: "",
    requirements: "",
    modality: "",
    important: 0,
  };

  const [createCourse, setCreateCourse] = useState(initialFormCourse);
  const [submitted, setSubmitted] = useState();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreateCourse({ ...createCourse, [name]: value });
  };
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };
  const handleInputFileChange = (event) => {
    const { name, files } = event.target;
    setCreateCourse({ ...createCourse, [name]: files[0] });
  };

  const save = () => {
    let data = {
      img: createCourse.img,
      name: createCourse.name,
      introduction: createCourse.introduction,
      description: createCourse.description,
      duration: createCourse.duration,
      requirements: createCourse.requirements,
      modality: createCourse.modality,
      import: createCourse.important
    };

    console.log(data);

    CoursesDataService.createCourses(createFormData(data))
      .then((response) => {
        setCreateCourse({
          img: response.data.img,
          name: response.data.name,
          introduction: response.data.introduction,
          description: response.data.description,
          duration: response.data.duration,
          requirements: response.data.requirements,
          modality: response.data.modality,
          important: response.data.important
        });
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const newCourse = () => {
    setCreateCourse(initialFormCourse);
    setSubmitted(false);
  };

 

  return (
    <>
      {submitted ? (
        <Jumbotron>
          <h1>El curso se cargo correctamente</h1>
          <Row>
            <Col>
              <Button variant="primary" onClick={newCourse}>
                Agregar otro
              </Button>
            </Col>
            <Col>
              <Button variant="primary" href="/">
                Home
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      ) : (
        <Form.Group>
          <Form.Group controlId="img">
            <Form.File
              name="img"
              label="Foto de portada"
              onChange={handleInputFileChange}
            />
          </Form.Group>
          <Form.Group required controlId="name">
            <Form.Label>Nombre del curso</Form.Label>
            <Form.Control
              name="name"
              onChange={handleInputChange}
              as="textarea"
              rows={1}
            />
          </Form.Group>
          <Form.Group required controlId="introduction">
            <Form.Label>Introducción al curso</Form.Label>
            <Form.Control
              name="introduction"
              onChange={handleInputChange}
              as="textarea"
              rows={4}
            />
          </Form.Group>
          <Form.Group required controlId="description">
            <Form.Label>Descripción del curso</Form.Label>
            <Form.Control
              name="description"
              onChange={handleInputChange}
              as="textarea"
              rows={4}
            />
          </Form.Group>
          <Form.Group required controlId="duration">
            <Form.Label>Duración del curso</Form.Label>
            <Form.Control
              name="duration"
              onChange={handleInputChange}
              as="textarea"
              rows={1}
            />
          </Form.Group>
          <Form.Group required controlId="requirements">
            <Form.Label>Requisitos</Form.Label>
            <Form.Control
              name="requirements"
              onChange={handleInputChange}
              as="textarea"
              rows={1}
            />
          </Form.Group>
          <Form.Group required controlId="modality">
            <Form.Label>Modalidad del curso</Form.Label>
            <Form.Control
              name="modality"
              onChange={handleInputChange}
              as="textarea"
              rows={1}
            />
          </Form.Group>
          <Button variant="primary" onClick={save}>
            Publicar nota
          </Button>
        </Form.Group>
      )}
    </>
  )
}

export default AddCourse