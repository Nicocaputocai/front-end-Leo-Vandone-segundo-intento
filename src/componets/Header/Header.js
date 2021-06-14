import { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import CoursesDataService from '../../services/CourseService.js';
import BlogDataService from '../../services/BlogService.js'
import "./Header.css";
// import Button from '../Button'
const Header = () => {

  const [courses, setCourses] = useState([]);
  const [notes, setNotes] = useState([])


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
    <header className="header">
      <Navbar className="container" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="logos">
          <img id="logo1" src="/Logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <NavDropdown title="Formación" id="collasible-nav-dropdown">
              {courses.map((course) => (
                <NavDropdown.Item href={`/courses/${course._id}`}>
                  {course.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* <NavDropdown title="Notas" id="basic-nav-dropdown">
            <NavDropdown.Item href={'/blog/cat/Prueba'}>
                  <span> Prueba </span>
                </NavDropdown.Item>
                
                <NavDropdown.Item href={'/blog/cat/segunda prueba'}>
                  <span> Segunda Prueba </span>
                </NavDropdown.Item>
                <NavDropdown.Item href={'/blog/cat/Tecnicas'}>
                  <span> Técnicas </span>
                </NavDropdown.Item>
                <NavDropdown.Item href={'/blog/cat/Entrevistas'}>
                  <span> Entrevistas </span>
                </NavDropdown.Item>
                <NavDropdown.Item href={'/blog/cat/Historias de vida'}>
                  <span> Historias de vida </span>
                </NavDropdown.Item>

        </NavDropdown> */}
            {/* <Nav.Link href="/blog">Notas</Nav.Link> */}
            <Nav.Link href="/about">Conocenos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/leonardovandone-27735b157" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </Nav.Link>

            <Nav.Link href="https://www.instagram.com/cabincrew.formacion/" target="_blank">
              <i class="fab fa-instagram-square fa-2x"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(!show);
  // const closeNav = () => setShow(false);

  // return (
  //   <>
  //     <header className="header">
  //       <section className="container">
  //         <div className="logos">
  //           <Link to="/" onClick={closeNav}>
  //             <img id="logo1" src="/logo.png" alt="logo" />
  //           </Link>
  //         </div>
  //         <button className="btn-menu" onClick={handleShow}>
  //           <span>
  //             <i className={show ? "fas fa-times" : "far fa-bars"} />
  //           </span>
  //         </button>
  //         <nav
  //           className={`menu d-flex align-items-center w-100 p-3 ${show ? "is-active" : ""}`}
  //         >
  //           <>
  //             <Link to="/courses" onClick={closeNav}>Formación</Link>
  //             <Link to="/blog" onClick={closeNav}>Notas</Link>
  //             <Link to="/contact" onClick={closeNav}>Contacto </Link>
  //             <Link to="/about" onClick={closeNav}>Conocenos</Link>
  //           </>
  //           <div className="flex-grow-1 d-flex justify-content-end">
  //             <Button
  //               to="/signin"
  //               text="Iniciar Sesión"
  //               className="btn btn-outline-light justify-self-end my-3 my-lg-0"
  //             />
  //           </div>
  //         </nav>
  //       </section>
  //     </header>
  //     {show ? (
  //       <div className="active-nav-background" aria-hidden="true" onClick={handleShow} />
  //     ) : null}
  //   </>
  // );
};

export default Header;
