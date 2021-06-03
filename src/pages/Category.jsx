import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import BlogDataService from "../services/BlogService.js";


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

    return (
      <>
          {notes.map((note) =>(
            note.category == category ? 
        <h1>
                  {note.title}
                  </h1>  : ''
              ))}


      </>
    );
};

export default Category