import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card, Nav } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";
import AuthorDataService from "../services/AuthorService";
import moment from "moment";

const Blog = () => {
  const { id } = useParams();

  const [note, setNote] = useState([]);
  const [author, setAuthor] = useState([]);

  console.log(id);

  const retrieveNote = () => {
    BlogDataService.getById(id)
      .then((response) => {
        setNote(response.data.blog);
        console.log(note);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveNote();
  }, []);

  const retrieveAuthor = () => {
    AuthorDataService.getAll()
      .then((response) => {
        setAuthor(response.data.authors);
        console.log(author);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    retrieveAuthor();
  }, []);

  

  return (
    <>
        <br />
        <br />
      <Container>

        <Row>
          <Image
            src={`http://api-leo.divisioncode.net.ar/img/${note.img}`}
            style={{ height: "400px", width: "1500px" }}
          ></Image> 
                    {/* <Image
            src="/EL PROCESO DE ENTENDER Y SER ENTENDIDO 1.png"
            style={{ height: "400px", width: "1500px" }}
          ></Image> */}
        </Row>
        <Row>
          <h1>{note.title}</h1>
          <span>{`Creado el ${moment(note.updatedAt).format("DD/MM/YYYY")}.`}</span>
        </Row>
        <hr />
        <Row>
          <p style={{ whiteSpace: "pre-wrap" }}>{note.paragraph}</p>
        </Row>
        <hr />
      </Container>
      {author.map((author) =>
        note.author == author.name ? (
          <Container>
            <Row className="align-items-center">
              <Col lg="1">
                <Image
                  className=" img-fluid rounded-circle"
                  src={`http://api-leo.divisioncode.net.ar/img/${author.img}`}
                  style={{ height: "80px", width: "150px" }}
                ></Image>
              </Col>
              <Col lg="11">
                <span style={{ fontWeight: "bold" }}>{author.name}</span> <br />
                <span>{author.description}</span>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )
      )}
      <br />
      {author.map((author) =>
       note.coAuthor && note.coAuthor == author.name ? (
        <Container>
        <Row className="align-items-center">
          <Col lg="1">
            <Image
              className=" img-fluid rounded-circle"
              src={`http://api-leo.divisioncode.net.ar/img/${author.img}`}
              style={{ height: "80px", width: "150px" }}
            ></Image>
          </Col>
          <Col lg="11">
            <span style={{ fontWeight: "bold" }}>{author.name}</span> <br />
            <span>{author.description}</span>
          </Col>
        </Row>
      </Container>
            ) : (
              ""
        ))}
    )
      <br />
    </>
  );
};

export default Blog;
