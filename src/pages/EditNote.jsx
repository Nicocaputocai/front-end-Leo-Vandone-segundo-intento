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
import BlogDataService from "../services/BlogService.js";
import AuthorDataService from "../services/AuthorService";

const EditNote = () => {
  const { id } = useParams();
  console.log(id);

  const initialFormNote = {
    img: "",
    title: "",
    paragraph: "",
    category: "",
    author: "",
    coAuthor: "",
    important:0,
    archived: 0,
  };

  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };

  const [editNote, setEditNote] = useState([], initialFormNote);
  const [submitted, setSubmitted] = useState();
  const [authors, setAuthors] = useState([]);

  const retrieveNote = () => {
    BlogDataService.getById(id)
      .then((response) => {
        setEditNote(response.data.blog);
        console.log(editNote);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveNote();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditNote({ ...editNote, [name]: value });
  };

  const handleInputFileChange = (event) => {
    const { name, files } = event.target;
    setEditNote({ ...editNote, [name]: files[0] });
  };

  const save = () => {
    let data = {
      id: id,
      img: editNote.img,
      title: editNote.title,
      paragraph: editNote.paragraph,
      category: editNote.category,
      author: editNote.author,
      coAuthor: editNote.coAuthor,
      important: editNote.important,
      archived: editNote.archived,
    };

    console.log(data);

    BlogDataService.editNote(createFormData(id, data))
      .then((response) => {
        setEditNote({
          id: response.data.id,
          img: response.data.img,
          title: response.data.title,
          paragraph: response.data.paragraph,
          category: response.data.category,
          author: response.data.author,
          coAuthor: response.data.coAuthor,
          important: response.data.important,
          archived: response.data.archived
        });
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const retrieveAuthor = () => {
    AuthorDataService.getAll()
      .then((response) => {
        setAuthors(response.data.authors);
        console.log(authors);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    retrieveAuthor();
  }, []);

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
              src={`http://api-leo.divisioncode.com.ar/img/${editNote.img}`}
              style={{ height: "400px", width: "1500px" }}
            ></Image>
          </Row>
          <Form.Group>
            <Form.Group controlId="img">
              <Form.File
                defaultValue={editNote.img}
                name="img"
                label="Foto de portada"
                accept="image/*, video/*"
                onChange={handleInputFileChange}
              />
            </Form.Group>

            <Form.Group required controlId="title">
              <Form.Label>Titulo de la nota</Form.Label>
              <Form.Control
                name="title"
                defaultValue={editNote.title}
                onChange={handleInputChange}
                as="textarea"
                rows={1}
              />
            </Form.Group>

            <Form.Group required controlId="paragraph">
              <Form.Label>Parrafo de la nota</Form.Label>
              <Form.Control
                name="paragraph"
                defaultValue={editNote.paragraph}
                onChange={handleInputChange}
                as="textarea"
                rows={10}
              />
            </Form.Group>

            <Form.Group required controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                name="category"
                defaultValue={editNote.category}
                onChange={handleInputChange}
                as="select"
              >
                <option value="" disabled>
                  Seleccione una categoría.....
                </option>
                <option value="Tecnicas">Técnicas</option>
                <option value="historias-de-vida"> Historias de vida </option>
              </Form.Control>
            </Form.Group>

            <Form.Group required controlId="author">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                name="author"
                onChange={handleInputChange}
                as="select"
                defaultValue={""}
              >
                <option value="" disabled>
                  Seleccione un autor.....
                </option>
                {authors.map((author) => (
                  <option value={author.name}> {author.name} </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="coAuthor">
              <Form.Label>Coauthor</Form.Label>
              <Form.Control
                name="coAuthor"
                onChange={handleInputChange}
                as="select"
                defaultValue={"#"}
              >
                <option value="#" disabled>
                  Seleccionar coauthor.....
                </option>
                <option value="">No</option>
                {authors.map((author) => (
                  <option value={author.name}> {author.name} </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={save}>
              Actualizar nota
            </Button>
          </Form.Group>
        </Container>
      )}
    </>
  );
};

export default EditNote;
