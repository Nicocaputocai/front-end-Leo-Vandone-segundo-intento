import { useState } from "react";
import { Button, Form, Jumbotron, Row, Col, Container} from "react-bootstrap";

import AuthorDataService from "../services/AuthorService";

const AddAuthor = () => {
    const initialFormAuthor = {
        img: "",
        name: "",
        description: ""
      };
    const [createAuthor, setCreateAuthor] = useState(initialFormAuthor);
    const [submitted, setSubmitted] = useState();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreateAuthor({ ...createAuthor, [name]: value });
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
        setCreateAuthor({ ...createAuthor, [name]: files[0] });
      };
      const save = () => {
        let data = {
          img: createAuthor.img,
          name: createAuthor.name,
          description: createAuthor.description,
        };
        console.log(data);
    AuthorDataService.create(createFormData(data))
      .then((response) => {
        setCreateAuthor({
          img: response.data.img,
          name: response.data.name,
          description: response.data.description,
        });
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const newAuthor = () => {
    setCreateAuthor(initialFormAuthor);
    setSubmitted(false);
  };

    return(
  <>
  {submitted ? (
    <Container>
        <Jumbotron>
          <h1>El autor se agregó correctamente</h1>
          <Row>
            <Col>
              <Button variant="primary" onClick={newAuthor}>
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
        </Container>
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
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              name="name"
              onChange={handleInputChange}
            />
          </Form.Group>

  <Form.Group required controlId="description">
            <Form.Label>Descripción del curso</Form.Label>
            <Form.Control
              name="description"
              onChange={handleInputChange}
            />
          </Form.Group>
  
  <Button variant="primary" onClick={save}>
            Agregar autor
          </Button>
</Form.Group>
)}
  </>
    )
};

export default AddAuthor;
