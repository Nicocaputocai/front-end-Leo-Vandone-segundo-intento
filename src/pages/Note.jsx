import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";

const Blog = () => {
  const { id } = useParams();

  const [note, setNote] = useState([]);
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

  return (
    <>
      <Container>
        <Row>
          <Image
            src="/FFHH-CRM-TEM.jpg"
            style={{ height: "400px", width: "1500px" }}
          ></Image>
        </Row>
        <Row>
          <h1>{note.title}</h1>
        </Row>
        <hr />
        <Row>
          <p>{note.paragraph}</p>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row  className='align-items-center'>
          <Col lg='2'>
            <Image
              className=" img-fluid rounded-circle"
              src="../Leonardo Vandone.jpg"
              style={{ height: "80px", width: "150px" }}>
            </Image>
          </Col>
          <Col lg='1'>
            <span>Leonardo Vandone</span>
          </Col>
          <Col>
            <span>Director de Cabin Crew World Training Instructor-Facilitador en FFHH-CRM.TEM  Tripulante de Cabina de Pasajeros ILSA.</span>
          </Col>
        </Row>
        <br />
      </Container>
      <Container>
        <Row id='author' className='align-items-center'>
          <Col lg='2'>
            <Image
              className=" img-fluid rounded-circle"
              src="../Barbara Wajszczuk.jpg"
              style={{ height: "80px", width: "150px" }}>
            </Image>
          </Col>
          <Col lg='1'>
            <span>Barbara Wajszczuk</span>
          </Col>
          <Col>
            <span> Intérprete, técnica Superior en Lengua de Señas Argentina. Facilitadora en LSA.</span>
          </Col>

        </Row>
        <br />
      </Container>
    </>
  );
};

export default Blog;
