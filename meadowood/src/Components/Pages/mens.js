import { Carousel, Container, Row } from "react-bootstrap"

function Mens() {
    return (
        <div>
            <center>
            <div className="cara">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImg"
                            src="Images/sp1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p className="slideLabel">First slide label</p>
                            <p className="slideText">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImg"
                            src="Images/sp2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <p className="slideLabel">Second slide label</p>
                            <p className="slideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImg"
                            src="Images/sp3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p className="slideLabel">Third slide label</p>
                            <p className="slideText">
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </center>
            <Container>
                <Row>
                    <center>
                        <div className="verse">
                        <img src="Images/bg1.svg"/>
                        <div className="miniHeader col-10">
                            "A man who is kind benefits himself, but a cruel man hurts himself."
                            <br />
                            -Proberbs 11:17 ESV
                        </div>
                        </div>
                    </center>
                </Row>
            </Container>
            <div className="miniRow3">
                <Container>
                    <div className="r3Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tortor condimentum lacinia quis vel eros donec. Nunc sed velit dignissim sodales ut eu sem integer. Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet risus feugiat in ante metus. Risus quis varius quam quisque id diam vel quam elementum. Dui vivamus arcu felis bibendum ut tristique et. Sagittis aliquam malesuada bibendum arcu vitae elementum. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. In hendrerit gravida rutrum quisque. Dui vivamus arcu felis bibendum ut tristique. Leo urna molestie at elementum eu facilisis.
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Mens