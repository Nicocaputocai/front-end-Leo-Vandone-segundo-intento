import {
  Jumbotron,
  Container,
  Card,
  CardDeck,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CoursesDataService from "../services/CourseService.js";

const Home = () => {
  const [courses, setCourses] = useState([]);
  
  const retrieveCourses = () => {
    CoursesDataService.getAll(courses)
      .then((response) => {
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    useEffect(() => {
      retrieveCourses();
    }, []);

 

  return (
    <>
      <div className="homePicture">
        <div className="overlay text-black row py-5 align-items-end">
          <div className="container">
            <div className="row">
              <div className="text-center justify-content-center align-self-center">
                <img
                  src="logo-original.png"
                  alt=""
                  srcset=""
                  height="400"
                  className="d-none d-sm-block"
                />
                <h1>Cabin Crew World Training</h1>
                <p className="">
                  <q>
                    Una milla de carretera no te lleva a ningún sitio. Una milla
                    de aeropuerto te puede llevar a todo el mundo.
                  </q>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center">
        <div className="container">
          <h1>Skills</h1>
          <div className="row skills">
            <div className="col-md-4 my-5">
              <div className="cardtext-center border-0">
                <div className="card-body">
                  <i class="fas fa-user-tie fa-3x mb-3"></i>
                  <h4>Responsabilidad y Eficiencia.</h4>
                  <hr />
                  <p>
                    Respetando las Regulaciones de la Aviación Civil y Comercial
                    para otorgar una formación de primera línea brindando las
                    herramientas necesarias para ser un profesional de
                    excelencia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="cardtext-center border-0">
                <div className="card-body">
                  <i class="fas fa-users fa-3x mb-3"></i>
                  <h4>Trabajo en Equipo e Innovación</h4>
                  <hr />
                  <p>
                    Los valores que nos distinguen a la hora de elegirnos son
                    las propuestas innovadoras como así también el uso y la
                    enseñanza de los Factores Humanos, Recursos Humanos, CRM y
                    TEM.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="cardtext-center border-0">
                <div className="card-body">
                  <i class="fas fa-brain fa-3x mb-3"></i>
                  <h4>Non-Technical Skills</h4>
                  <hr />
                  <p>
                    El proceso de enseñanza - aprendizaje de las habilidades no
                    técnicas (NTS) son un elemento esencial que contribuye a
                    reducir la probabilidad de que un error o fallo de lugar a
                    un accidente; habilidades de gestión: mentales, sociales y
                    personales que contribuyen a operaciones más seguras y
                    eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light text-center">
        <div className="container">
          <div className="m-5">
            <h1>Sobre nosotros.</h1>
            <p>
              Nuestra misión como profesionales es brindar una capacitación a
              los TCP(Tripulantes de Cabina de Pasajeros), en actividad o en
              formación como así también a todo el personal aeronáutico
              brindando innovaciones en los servicios de accesibilidad universal
              ofreciendo información y formación actualizada para la
              incorporación en empresas aéreas nacionales e internacionales.
            </p>
            <p>
              Nos une un mismo objetivo y una misma pasión, "los Factores
              Humanos, el CRM y TEM(Treat Error Management)", marcando la
              diferencia de un verdadero trabajo en equipo.
            </p>
          </div>
        </div>
      </div>
      <Jumbotron className="bg-dark text-center">
        <Container>
          <h1 className="text-white">Nuestro staff</h1>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="Leonardo Vandone.jpg"
                alt="Leonardo Vandone"
                className=" img-fluid rounded-circle"
              />
              <Card.Body>
                <Card.Title>Leonardo Vandone.</Card.Title>
                <Card.Text>
                  Director de Cabin Crew World Training <br />{" "}
                  Instructor-Facilitador en FFHH-CRM.TEM <br /> Tripulante de
                  Cabina de Pasajeros ILSA.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="Barbara Wajszczuk.jpg"
                alt="Barbara Wajszczuk"
                className="img-fluid rounded-circle"
              />
              <Card.Body>
                <Card.Title>Bárbara Wajszczuk.</Card.Title>
                <Card.Text>
                  Intérprete, técnica Superior en Lengua de Señas Argentina <br />{" "}
                  Facilitadora en LSA.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="Jonhatan Gonzalez.jpg"
                alt="Jonhatan Gonzalez"
                className="rounded-circle"
              />
              <Card.Body>
                <Card.Title>Yonhatan González Torales.</Card.Title>
                <Card.Text>
                  Facilitador en Lengua de Señas Argentina y Sistema de Señas
                  Internacional.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <br />
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="María Isabel Salinas.jpg"
                alt="María Isabel Salinas"
                className="rounded-circle"
              />
              <Card.Body>
                <Card.Title>María Isabel Salinas.</Card.Title>
                <Card.Text>
                  Directora de World Aviation Academy <br /> Tripulante de
                  Cabina de Pasajeros <br /> Facilitadora.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="David Britez.jpg"
                alt="David Britez"
                className="rounded-circle"
              />
              <Card.Body>
                <Card.Title>David Britez.</Card.Title>
                <Card.Text>
                  Tripulante de Cabina de Pasajeros <br /> Asistente en LSA/SSI.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="Tamara Ganon.jpg"
                className="rounded-circle"
              />
              <Card.Body>
                <Card.Title>Tamara Ganon.</Card.Title>
                <Card.Text>
                  Tripulante de Cabina de Pasajeros <br /> Asistente en LSA/SSI.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </Jumbotron>
      <Container>
        <CardDeck>
          {courses.map((course) => (
            course.important ? 
            <Card course = {course} className="cardborder-0 bg-light text-center" >
              <Card.Img src={`/${course.img}`}    style={{ height: "200px" }} className="img-fluid" />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                  <hr />
                <a href={`/courses/${course._id}`}>
                  <button type="button" className="btn btn-dark btn-lg">
                    Leer más
                  </button>
                </a>
                </Card.Body>
            </Card>
            : ""
          ))}
        </CardDeck>
      </Container>
            <br />
      {/* <div className="py-5 text-center">
        <div className="container">
          <h1>Nuestros cursos destacados</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="cardborder-0 bg-light">
                <div className="card-body">
                  <img
                    src="EL PROCESO DE ENTENDER Y SER ENTENDIDO 1.png"
                    alt="Lenguaje de señas"
                    style={{ height: "200px" }}
                    className="img-fluid"
                  />
                  <h2>El proceso de entender y ser entendido</h2>
                  <p>
                    Formación en LSA(Lengua de Señas Argentina) para TCP y
                    Personal Aeronaútico para poder comunicarse con pasajeros
                    Sordos desde que llegan al aeropuerto hasta que finalicen su
                    vuelo.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                    <a href="/courses/60ac0cd677fc882280a91a55">
                      <button type="button"  className="btn btn-dark btn-lg">
                       Leer más
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardborder-0 bg-light">
                <div className="card-body">
                  <img
                    src="FFHH-CRM-TEM.jpg"
                    alt="Piloto"
                    style={{ height: "200px" }}
                    className="img-fluid"
                  />
                  <h2>Factores Humanos - CRM - TEM</h2>
                  <p>
                  El curso está dirigido a: TCP Tripulantes de Cabina de Pasajeros- Pilotos- Controladores de tránsito aéreo- Despachantes de aeronaves – Personal de Mantenimiento – Psicólogos- Psicopedagogos- Médicos y afines. <br />
                  La formación se orienta al desarrollo de las competencias del Facilitador en Factores Humanos, CRM, TEM, como objetivo el desarrollo de las capacidades para llevar adelante una mejora a nivel laboral basada en la seguridad de las operaciones pudiendo construir, generar y fortalecer la Cultura de Seguridad.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                    <a href="/courses/60ac107b77fc882280a91a58">
                      <button type="button"  className="btn btn-dark btn-lg">
                       Leer más
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardborder-0 bg-light">
                <div className="card-body">
                  <img
                    src="SSI.jpg"
                    alt="Piloto"
                    style={{ height: "200px" }}
                    className="img-fluid"
                  />
                  <h2>Formación en SSI (Sistema de Señas Internacional)</h2>
                  <p>
                    En la cursada, dictada por Instructor Sordo y Oyente, la
                    enseñanza del SSI está enfocada no solo en la incorporación
                    de vocabulario técnico especifico sino también fundamentada
                    en la Ley universal de accesibilidad, igualdad de
                    oportunidades, no discriminación y accesibilidad universal
                    de las personas con discapacidad.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-6">
                    <a href="/courses/60ac0c4177fc882280a91a54">
                      <button type="button"  className="btn btn-dark btn-lg">
                       Leer más
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;

{
  /* <div className="container p-5">
          <h1 className="text-white">Equipo</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/0MW2YTd9J7AUco3_IeB-lkDQ9r6tokoGM1dTc0Z91Yw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2NDM5NDUuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/DIB7lUrPjuKKJqpHSwe0wU3m-1e-1ADMAlyLqyYALvA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2NTczMTYuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/qqETlT-jSENAnyAfqf2z0wbsQ0fyb4X4oXlUR038RoI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NzQ0OTUuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/J_9KPRWjnVOHDvCBty2CLTZcrsWyp1QDKUEZZ3MNJPI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MzU0NzMuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/J_9KPRWjnVOHDvCBty2CLTZcrsWyp1QDKUEZZ3MNJPI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MzU0NzMuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://images.generated.photos/J_9KPRWjnVOHDvCBty2CLTZcrsWyp1QDKUEZZ3MNJPI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0MzU0NzMuanBn.jpg" alt="Integrante 1" srcset="" className="img-fluid rounded-circle" />
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
