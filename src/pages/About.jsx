import {
  Jumbotron,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const About = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <Row id="fila">
            <Col xs={6} md={2}>
            <img src="Leonardo Vandone.jpg" alt="Integrante 1" srcset="" className="img-fluid " />
            </Col>
            <Col xs={12} md={8} id="data" className="align-self-end">
              <h1>Leonardo Gastón Vandone</h1>
              <hr style={{width: "75%"}} />
              <h3>
                Instructor y Facilitador en Factores Humanos-CRM-TEM Tripulante
                de Cabina de Pasajeros.
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <p className="py-5 text-center" style={{fontSize:"1.2em"}}>
          Intérprete de Lengua de Señas Argentina, creador de “El proceso de
          Entender y ser Entendido”, formación en Lengua de Señas Argentina y
          Sistema de Señas Internacional (SSI) para TCP y Personal Aeronáutico.
          <br />
          Técnico en Ceremonial y Protocolo especializado en Heráldica y
          Vexilología.
          <br />
          Eterno estudiante en formación continua. <br />
          Fines del año 2000 un viaje, un destino desconocido. En pleno invierno
          llegaba a Nueva Delhi, India, un hermoso país que sin saber me iba a
          abrir las puertas para ingresar al mundo de la aeronáutica. <br />
          Que curiosa es la curiosidad, aun cuando no pretende serlo… <br />
          La Formación para TCP/Personal Aeronáutico busca atraparte con sus
          palabras. El volar, conocer distintos países, distintas culturas y
          formarme continuamente me permitieron llegar donde me encuentro
          actualmente. <br />
          Que curiosa es la curiosidad sobre todo cuando no pretende serlo.
          "Donde fueres haz lo que vieres" probablemente una de las frases
          hechas que me generan más amor y odio a partes iguales. La odio porque
          suena fatal y a casi todo el mundo se llena la boca al pronunciarla
          como si realmente se dejaran llevar por ella. Se trata de una especie
          de violación gramatical socialmente aceptada y me gusta porque es una
          verdad en sí misma y probablemente el mejor consejo a la hora de
          viajar, un consejo que hace que te integres y entiendas el por qué de
          las cosas. <br />
          Me encanta tener la oportunidad de compartir mis pasiones,
          pensamientos y conocimientos con cada uno de mis lectores. Sigue
          leyendo, ¡y disfruta!
        </p>
      </Container>
    </>
  );
};

export default About;
