import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col,Form, Button, Modal } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";



const EditDeleteNotes = () => {
      

  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState();
  const [show, setShow] = useState(false);

  const retrieveNotes = () => {
    BlogDataService.getAllNotes()
      .then(response => {
        setNotes(response.data.blogs);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const initialFormNote = {
    img: "{note.img}",
    title: "{note.title}",
    paragraph: "{note.paragraph}",
    category: "{note.category}",
    author: "{note.author}",
    coAuthor: "{note.coAuthor}",
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEdit({ ...notes, [name]: value });
  };
  useEffect(() => {
    retrieveNotes();
  }, []);
 const limit = function(string = '', limit = 70) {  
    return string.substring(0, limit)
  }
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 500) + "[...]" : str;
  }
  const save = () => {
    let data = {
      img: notes.img,
      title: notes.title,
      paragraph: notes.paragraph,
      category: notes.category,
      author: notes.author,
      coAuthor: notes.coAuthor,
    };

    console.log(data);

    BlogDataService.notes(data)
      .then((response) => {
        setEdit({
          img: response.data.img,
          title: response.data.title,
          paragraph: response.data.paragraph,
          category: response.data.category,
          author: response.data.author,
          coAuthor: response.data.coAuthor,
        });
        setEdit(true);
      })
      .catch((err) => console.log(err));
  };
  const editNote = () => {
    editNote(initialFormNote);
    setEdit(false);
  };

  return (
    <>
{edit ? (
      <Form.Group>
      <Form.Group controlId="img">
        <Form.File
          name="img"
          label="Foto de portada"
          onChange={handleInputChange}
        />
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
          defaultValue={""}
        >
          <option value="" disabled>
            Seleccione una categoría.....
          </option>
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
          defaultValue={""}
        >
          <option value="" disabled>
            Seleccione un autor.....
          </option>
          <option value="Leonardo Vandone">Leonardo Vandone</option>
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
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" onClick={save}>
        Publicar nota
      </Button>
    </Form.Group>
      ) : (
        notes.map((note) =>(

          <Container >
          <Row className='align-items-center'>
            <Col lg='6'>
              <h3> {note.title}</h3>              
              <span> {note.createdAt} </span> <br />
              <span> {note.category} </span>

              <p> {truncate(note.paragraph)}</p>
                <Button type="button" className="btn btn-dark btn-lg" onClick={() => setShow(true)}>
                  Editar
                </Button>
                <Button onClick={edit} type="button" className="btn btn-danger btn-lg">
                  Borrar
                </Button>
            </Col>
          </Row>
          <br />
        </Container>
            ))  
      )
        }
        <Modal
        show={show}
        size= "lg"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  )

};

export default EditDeleteNotes;
