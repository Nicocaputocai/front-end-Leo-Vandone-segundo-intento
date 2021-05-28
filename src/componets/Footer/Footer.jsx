import { Card, CardGroup } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
      <div className="bg-dark text-white text-center">
      <a href="https://api.whatsapp.com/send?phone=+5491153796531" target="_blank"  style={{ textDecoration: 'none', color:'white'}}>
        <span>&copy; 2021 The Division Code   </span>
        
          <i class="fab fa-whatsapp fa-1x"></i>
          </a>
      </div>
        {/* <CardGroup className="overlay footer-overlay">
          <Card className="border-0 bg-transparent">
            <Card.Body>
              <h3>Sucursal 1</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-map-marker-alt"></i> Dirección 1
                  </a>
                </li>
                <li>
                  <a
                    href="tel:5555-5555"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-phone-alt"></i> (011)5555-5555
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@dominio.com"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-at"></i> mail@dominio.com
                  </a>
                </li>
              </ul>
              <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar"
                allowfullscreen=""
                loading="lazy"
                className="card-map embed-responsive-item rounded"
              />
            </div>
            </Card.Body>
            
          </Card>
          <Card className="border-0 bg-transparent">
            <Card.Body>
              <h3>Sucursal 2</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-map-marker-alt"></i> Dirección 2
                  </a>
                </li>
                <li>
                  <a
                    href="tel:5555-5555"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-phone-alt"></i> (011)5555-5555
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@dominio.com"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-at"></i> mail@dominio.com
                  </a>
                </li>
              </ul>
              <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar"
                allowfullscreen=""
                loading="lazy"
                className="card-map embed-responsive-item rounded"
              />
            </div>
            </Card.Body>
          </Card>
          <Card className="border-0 bg-transparent">
            <Card.Body>
              <h3>Sucursal 3</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-map-marker-alt"></i> Dirección 3
                  </a>
                </li>
                <li>
                  <a
                    href="tel:5555-5555"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-phone-alt"></i> (011)5555-5555
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@dominio.com"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-at"></i> mail@dominio.com
                  </a>
                </li>
              </ul>
              <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar"
                allowfullscreen=""
                loading="lazy"
                className="card-map embed-responsive-item rounded"
              />
            </div>
            </Card.Body>
          </Card>
          <Card className="border-0 bg-transparent">
            <Card.Body>
              <h3>Sucursal 4</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-map-marker-alt"></i> Dirección 4
                  </a>
                </li>
                <li>
                  <a
                    href="tel:5555-5555"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-phone-alt"></i> (011)5555-5555
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@dominio.com"
                    target="__blank"
                    className="text-dark text-decoration-none"
                  >
                    <i class="fas fa-at"></i> mail@dominio.com
                  </a>
                </li>
              </ul>
              <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar"
                allowfullscreen=""
                loading="lazy"
                className="card-map embed-responsive-item rounded"
              />
            </div>
            </Card.Body>
          </Card>
        </CardGroup> */}

        {/* <div className="overlay footer-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body">
                                        <h3>Sucursal 1</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-map-marker-alt"></i> Dirección 1</a></li>
                                            <li><a href="tel:5555-5555" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-phone-alt"></i> (011)5555-5555</a></li>
                                            <li><a href="mailto:mail@dominio.com" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-at"></i> mail@dominio.com</a></li>
                                        </ul>
                                        <div className="embed-responsive">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" className="embed-responsive-item rounded" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body">
                                        <h3>Sucursal 2</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-map-marker-alt"></i> Dirección 2</a></li>
                                            <li><a href="tel:5555-5555" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-phone-alt"></i> (011)5555-5555</a></li>
                                            <li><a href="mailto:mail@dominio.com" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-at"></i> mail@dominio.com</a></li>
                                        </ul>
                                        <div className="embed-responsive">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" className="embed-responsive-item rounded" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body">
                                        <h3>Sucursal 3</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-map-marker-alt"></i> Dirección 3</a></li>
                                            <li><a href="tel:5555-5555" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-phone-alt"></i> (011)5555-5555</a></li>
                                            <li><a href="mailto:mail@dominio.com" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-at"></i> mail@dominio.com</a></li>
                                        </ul>
                                        <div className="embed-responsive">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" className="embed-responsive-item rounded" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body">
                                        <h3>Sucursal 4</h3>
                                        <ul className="list-unstyled">
                                            <li><a href="https://goo.gl/maps/X8vrwsKoSDc3HGXVA" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-map-marker-alt"></i> Dirección 4</a></li>
                                            <li><a href="tel:5555-5555" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-phone-alt"></i> (011)5555-5555</a></li>
                                            <li><a href="mailto:mail@dominio.com" target="__blank" className="text-dark text-decoration-none"><i class="fas fa-at"></i> mail@dominio.com</a></li>
                                        </ul>
                                        <div className="embed-responsive">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62326.678680230565!2d-58.54565014138976!3d-34.814933978242244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses-419!2sar!4v1619896596122!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" className="embed-responsive-item rounded" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </footer>
    </>
  );
};

export default Footer;
