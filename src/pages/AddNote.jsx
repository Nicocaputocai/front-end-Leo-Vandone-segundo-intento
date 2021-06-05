import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";

const Create = () => {
  const initialFormNote = {
    img: "",
    title: "",
    paragraph: "",
    category: "",
    author: "",
    coAuthor: "",
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
      coAuthor: createNote.coAuthor,
    };

    console.log(data);

    BlogDataService.createNote(data)
      .then((response) => {
        setCreateNote({
          img: response.data.img,
          title: response.data.title,
          paragraph: response.data.paragraph,
          category: response.data.category,
          author: response.data.author,
          coAuthor: response.data.coAuthor,
        })
      })
      .catch((err) => console.log(err));


  };

  return (
    <>
      <Form>
        <Form.Group controlId="img">
          <Form.File name="img" label="Foto de portada" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group required controlId="title">
          <Form.Label>Titulo de la nota</Form.Label>
          <Form.Control
            name="title"
            onChange={handleInputChange}
            as="textarea"
            rows={1}
          />
        </Form.Group>
        <Form.Group required controlId="paragraph">
          <Form.Label>Parrafo de la nota</Form.Label>
          <Form.Control
            name="paragraph"
            onChange={handleInputChange}
            as="textarea"
            rows={10}
          />
        </Form.Group>
        <Form.Group required controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            name="category"
            onChange={handleInputChange}
            as="select"
            defaultValue={''}
          >
            <option value="" disabled>Seleccione una categoría.....</option>
            <option value="Tecnicas">Técnicas</option>
            <option value="Entrevistas"> Entrevistas </option>
            <option value="Historias de vida">Historias de vida</option>
          </Form.Control>
        </Form.Group>
        <Form.Group required controlId="author">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            name="author"
            onChange={handleInputChange}
            as="select"
            defaultValue={''}
          >
            <option value="" disabled>Seleccione un autor.....</option>
            <option value="Leonardo Vandone">Leonardo Vandone</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="coAuthor">
          <Form.Label>Coauthor</Form.Label>
          <Form.Control
            name="coAuthor"
            onChange={handleInputChange}
            as="select"
            defaultValue={'#'}
          >
            <option value="#" disabled>
              Seleccionar coauthor.....
            </option>
            <option value="">No</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        
        <Button variant="primary" onClick={save}>
          Publicar nota
        </Button>
      </Form>
    </>
  );
}

export default Create;