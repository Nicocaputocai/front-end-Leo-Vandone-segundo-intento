import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CoursesDataService from '../services/CourseService.js';
import {
    Jumbotron,
    Container,
    CardGroup,
    Card,
    Row,
    Col,
    Image,
} from "react-bootstrap";

const Course = () => {

    const { id } = useParams()

    const [course, setCourse] = useState([])
    console.log(id)

    const retrieveCourse = () => {
        CoursesDataService.getById(id)
            .then(response => {
                setCourse(response.data.courses[0]);
                console.log(course)
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        retrieveCourse();
    }, []);

    return (
        <>
<Container>
        <Row>
            <Image src={`../${course.img}`} alt="" />
        </Row>
        <Row>
          <Col>
            <h1 className="text-center">
              {course.name}
            </h1>
          </Col>
        </Row>
      </Container>

      <Jumbotron fluid className="bg-dark">
        <Container>
          <h3 className="text-center text-white">
            {course.introduction}
          </h3>
        </Container>
      </Jumbotron>

      <div className="text-center">
        <div className="container">
          <div className="m-5">
            <p>
                {course.description}
            </p>
          </div>
        </div>
      </div>
      <Container>
        <CardGroup className="">
          <Card border="white">
          <i class="fas fa-user-clock fa-2x"></i>
            <Card.Body>
              <Card.Text>{course.duration}</Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <i class="fas fa-hand-paper fa-2x"></i>
            <Card.Body>
              <Card.Text>{course.requirements}</Card.Text>
            </Card.Body>
          </Card>
          <Card border="white">
            <i class="fas fa-chalkboard-teacher fa-2x"></i>
            <Card.Body>
              <Card.Text className="text-content-center"> {course.modality} </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Container>
        <hr />
        <h2 className="text-center">¿Queres inscribirte?</h2> <br />
        <a className='contacto' href="mailto:tcp.formacion@gmail.com" target="_blank" style={{ textDecoration: 'none', color:'rgb(33, 37, 41)'}} >
          <i class="fas fa-envelope fa-2x"></i> <span> Tcp.formacion@gmail.com </span>
        </a> <br /> <br />
        <a href="https://api.whatsapp.com/send?phone=+5491164183262" target="_blank"  style={{ textDecoration: 'none', color:'rgb(33, 37, 41)'}}>
          <i class="fab fa-whatsapp-square fa-2x"></i> <span>1164183262</span> 
          </a>
        </Container>
      </Container>
      
    </>

    );
}

export default Course;