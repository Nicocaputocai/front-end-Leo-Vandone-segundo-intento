import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";
import moment from "moment";

const EditDeleteNotes = () => {
  const [notes, setNotes] = useState([]);
  const retrieveNotes = () => {
    BlogDataService.getAllNotes()
      .then((response) => {
        setNotes(response.data.blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveNotes();
  }, []);
  const limit = function (string = "", limit = 70) {
    return string.substring(0, limit);
  };
  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 500) + "[...]" : str;
  };
  

  return (
    <>
      {notes.map((note) => (
        <Container>
          <Row className="align-items-center">
            <Image
              src={`https://api-leo.divisioncode.com.ar/img/${note.img}`}
              style={{ height: "200px", width: "400px" }}
            ></Image>
            <Col lg="6">
              <h3> {note.title}</h3>
              <span>{`Creado el ${moment(note.updatedAt).format(
                "DD/MM/YYYY"
              )} a las ${moment(note.updatedAt).format(
                "HH:MM"
              )} hs.`}</span>{" "}
              <br />
              <h3> {note.category} </h3>
              <a href={`/admin/editNote/${note._id}`}>
              <Button
                type="button"
                className="btn btn-dark btn-lg"
              >
                Editar
              </Button>
              </a>
              <Button
                type="button"
                className="btn btn-danger btn-lg"
              >
                Borrar
              </Button>
            </Col>
          </Row>
          <hr />
        </Container>
      ))}
    </>
  );
};

export default EditDeleteNotes;
