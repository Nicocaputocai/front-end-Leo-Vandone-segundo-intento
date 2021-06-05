import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";

const Create = () =>{
  const initialFormNote = {
    img: "",
    title: "",
    paragraph: "",
    category: "",
    author: "",
    coAutor: "",
  };

  const [createNote, setCreateNote] = useState(initialFormNote);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreateNote({ ...createNote, [name]: value });
  };

  const save = () => {
    let data = {
      img: createNote.img,
      title: createNote.title,
      paragraph: createNote.paragraph,
      category: createNote.category,
      author: createNote.author,
      coAutor: createNote.coAutor,
      important: createNote.important,
    };

    BlogDataService.createNote(data)
      .then((response) => {
        setCreateNote({
          img: response.data.img,
          title: response.data.title,
          paragraph: response.data.paragraph,
          category: response.data.category,
          author: response.data.author,
          coAutor: response.data.coAutor,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Form>
        <Form.Group controlId="img">
          <Form>
            <Form.File name="img" id="img" label="Foto de portada" />
          </Form>
        </Form.Group>
        <Form.Group required controlId="title" name="title">
          <Form.Label>Titulo de la nota</Form.Label>
          <Form.Control
            type="string"
            name="title"
            onChange={handleInputChange}
            as="textarea"
            rows={1}
          />
        </Form.Group>
        <Form.Group required controlId="paragraph">
          <Form.Label>Parrafo de la nota</Form.Label>
          <Form.Control
            type="string"
            name="paragraph"
            onChange={handleInputChange}
            as="textarea"
            rows={10}
          />
        </Form.Group>
        <Form.Group required controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="string"
            name="category"
            onChange={handleInputChange}
            as="select"
          >
            <option disabled>Seleccione una categoría.....</option>
            <option value="Tecnicas">Técnicas</option>
            <option value="Entrevistas"> Entrevistas </option>
            <option value="Historias de vida">Historias de vida</option>
          </Form.Control>
        </Form.Group>
        <Form.Group required controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="string"
            name="author"
            onChange={handleInputChange}
            as="select"
            select
          >
            <option disabled>Seleccione una categoría.....</option>
            <option value="Leonardo Vandone">Leonardo Vandone</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="coauthor">
          <Form.Label>Coautor</Form.Label>
          <Form.Control
            type="string"
            name="coAuthor"
            onChange={handleInputChange}
            as="select"
            select
          >
            <option value="" disabled>
              Seleccionar coautor.....
            </option>
            <option value="">No</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={save} type="submit">
          Publicar nota
        </Button>
      </Form>
    </>
  );
}

export default Create;