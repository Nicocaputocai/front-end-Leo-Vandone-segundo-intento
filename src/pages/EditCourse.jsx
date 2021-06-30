import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Button,
  Form,
  Jumbotron,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";
import CoursesDataService from "../services/CourseService";

const EditCourse = () => {
  const {id}  = useParams();
  console.log("id: ", id);

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
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    return formData;
  };

  const [editCourse, setEditCourse] = useState(initialFormCourse)
  const [submitted, setSubmitted] = useState();

  useEffect(() => {
    const retrieveCourse = () => {
      CoursesDataService.getById(id)
        .then((response) => {
          setEditCourse(response.data.courses[0]);
          console.log(editCourse);
        })
        .catch((err) => console.log(err));
    };
    retrieveCourse();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditCourse({ ...editCourse, [name]: value });
  };

  const handleInputFileChange = (event) => {
    const { name, files } = event.target;
    setEditCourse({ ...editCourse, [name]: files[0] });
  };

  const save = () => {
    let data = {
      img: editCourse.img,
      name: editCourse.name,
      introduction: editCourse.introduction,
      description: editCourse.description,
      duration: editCourse.duration,
      requirements: editCourse.requirements,
      modality: editCourse.modality,
      import: editCourse.important,
    };

    console.log(data);

    CoursesDataService.EditCourse(id, createFormData(data))
      .then((response) => {
        setEditCourse({
          img: response.data.img,
          name: response.data.name,
          introduction: response.data.introduction,
          description: response.data.description,
          duration: response.data.duration,
          requirements: response.data.requirements,
          modality: response.data.modality,
          important: response.data.important,
        });
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {submitted ? (
        <Jumbotron>
          <h1>La nota se cargo correctamente</h1>
          <Row>
            <Col>
              <Button variant="primary" href="/admin">
                Volver a administrar
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
        <Container>
          <Row>
            <Image
              src={`http://api-leo.divisioncode.com.ar/img/${editCourse.img}`}
              style={{ height: "400px", width: "1500px" }}
            ></Image>
          </Row>
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
                defaultValue={editCourse.name}
                onChange={handleInputChange}
                as="textarea"
                rows={1}
              />
            </Form.Group>
            <Form.Group required controlId="introduction">
              <Form.Label>Introducción al curso</Form.Label>
              <Form.Control
                name="introduction"
                defaultValue={editCourse.introduction}
                onChange={handleInputChange}
                as="textarea"
                rows={4}
              />
            </Form.Group>
            <Form.Group required controlId="description">
              <Form.Label>Descripción del curso</Form.Label>
              <Form.Control
                name="description"
                defaultValue={editCourse.description}
                onChange={handleInputChange}
                as="textarea"
                rows={4}
              />
            </Form.Group>
            <Form.Group required controlId="duration">
              <Form.Label>Duración del curso</Form.Label>
              <Form.Control
                name="duration"
                defaultValue={editCourse.duration}
                onChange={handleInputChange}
                as="textarea"
                rows={1}
              />
            </Form.Group>
            <Form.Group required controlId="requirements">
              <Form.Label>Requisitos</Form.Label>
              <Form.Control
                name="requirements"
                defaultValue={editCourse.requirements}
                onChange={handleInputChange}
                as="textarea"
                rows={1}
              />
            </Form.Group>
            <Form.Group required controlId="modality">
              <Form.Label>Modalidad del curso</Form.Label>
              <Form.Control
                name="modality"
                defaultValue={editCourse.modality}
                onChange={handleInputChange}
                as="textarea"
                rows={1}
              />
            </Form.Group>
            <Button variant="primary" onClick={save}>
              Editar Nota
            </Button>
          </Form.Group>
        </Container>
      )}
    </>
  );
};
export default EditCourse;
