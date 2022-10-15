import { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Modal,
    Image,
  } from "react-bootstrap";
  import CoursesDataService from "../services/CourseService.js";

  const EditDeleteCourses = () => {
    const [courses, setCourses] = useState([]);

    const retrieveCourses = () => {
        CoursesDataService.getAll()
          .then(response => {
            setCourses(response.data.courses);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        retrieveCourses();
      }, []);

    const deleteCourse = (id) =>{
        CoursesDataService.deleteCourse(id)
            .then(response => {
                setCourses.filter(course => response.data.course._id != course.id)
            })
    }

    return(
        <>
            {courses.map((course)=>(
                <Container>
                    <Row className="align-items-center">
                        <Image
                        src={`https://api-leo.divisioncode.net.ar/img/${course.img}`}
                        style={{ height: "200px", width: "400px" }}
                        >
                        </Image>
                        <Col lg="6">
                            <h3>{course.name}</h3>
                            <br />
                            <a href={`/admin/editCourse/${course._id}`}>
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
                                onClick={ ()=> deleteCourse(course._id)}
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
}

export default EditDeleteCourses

