import {Container,Col, Nav, Row, Tab} from 'react-bootstrap';
import AddNote from './AddNote.jsx';
import AddCourse from './AddCourse'
import Create from './AddNote.jsx';
import EditDeleteNotes from './EditDeleteNotes'
import AddAuthor from './AddAuthor'

const Admin = () =>{

    return (
        <>
        <Container >
            <h1>Panel de administración</h1>
        </Container>
       <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Agregar nota</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Editar/Eliminar notas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Agregar curso</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Editar/Eliminar cursos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='fifth'>Agregar autor/co-autor</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <Create />

        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <EditDeleteNotes />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <AddCourse/>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
          <AddAuthor/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        
</Container>
        </>
    );
};

export default Admin