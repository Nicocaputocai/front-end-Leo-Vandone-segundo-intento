import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";
import moment from "moment";

const Category = () =>{

        const { category } = useParams();
      
        const [notes, setNotes] = useState([]);
        // console.log(category);
      
        // const retrieveCategory = () => {
        //   BlogDataService.geAllCategories(category)
        //     .then((response) => {
        //       setCategory(response.data.blog);
        //       console.log(cat);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // };
        // useEffect(() => {
        //   retrieveCategory();
        // }, []);
        const retrieveNotes = () => {
          BlogDataService.getAllNotes()
            .then(response => {
              setNotes(response.data.blogs);
            })
            .catch(error => {
              console.log(error);
            });
        };
      
        useEffect(() => {
          retrieveNotes();
        }, []);
       const limit = function(string = '', limit = 70) {  
          return string.substring(0, limit)
        }
        const truncate = (str) => {
          return str.length > 50 ? str.substring(0, 300) + "[...]" : str;
        }
    return (
      <>
          <br />
          <br />
          {notes.map((note) =>(
            note.category == category ? 
            <Container >
            <Row className='align-items-center'>
              <Col lg='6'>
              { <Image src={`http://api-leo.divisioncode.net.ar/img/${note.img}`} 
              style={{width:'500px', height:'300px'}}>  
              </Image>
              }
              {/* <Image  src="/EL PROCESO DE ENTENDER Y SER ENTENDIDO 1.png" 
              style={{width:'500px', height:'300px'}}>    
                </Image> */}
              </Col>
              <Col lg='6'>
                <h3> {note.title}</h3>
                <span>{`Creado el ${moment(note.updatedAt).format("DD/MM/YYYY")}.`}</span>
                <p> {truncate(note.paragraph)}</p>
                <a href={`/blog/${note._id}`} >
                  <button type="button" className="btn btn-dark btn-lg">
                    Leer más
                  </button>
                </a>
              </Col>
            </Row>
            <br />
          </Container>   : ''
              ))}


      </>
    );
};

export default Category