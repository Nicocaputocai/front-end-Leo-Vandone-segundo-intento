import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card, Nav } from "react-bootstrap";
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
            src={`https://cabin-crew-api.herokuapp.com/img/${note.img}`}
            style={{ height: "400px", width: "1500px" }}
          ></Image>
        </Row>
        <Row>
          <h1>{note.title}</h1>
          <span>03/06/2021</span>
        </Row>
        <hr />
        <Row>

          <p style={{whiteSpace: "pre-wrap"}}>{note.paragraph}</p>
        </Row>
        <hr />
      </Container>
      <Container id='author'>
        <Row className='align-items-center'>
          <Col lg='1'>
            <Image
              className=" img-fluid rounded-circle"
              src="../Leonardo Vandone.jpg"
              style={{ height: "80px", width: "150px" }}>
            </Image>
          </Col>
          <Col lg='11'>
            <span style={{fontWeight: 'bold'}}> Leonardo Vandone</span> <br />
            <span>Director de Cabin Crew World Training.</span>
          </Col>
        </Row>

      </Container>
      <br />
      <Container >
        <Row className='align-items-center'>
          <Col lg='1'>
            <Image
              className=" img-fluid rounded-circle"
              src="../Leonardo Vandone.jpg"
              style={{ height: "80px", width: "150px" }}>
            </Image>
          </Col>
          <Col lg='11'>
            <span style={{fontWeight: 'bold'}}> Leonardo Vandone</span> <br />
            <span>Director de Cabin Crew World Training.</span>
          </Col>
        </Row>

      </Container>
      <br /> 
    </>
  );
};

export default Blog;
