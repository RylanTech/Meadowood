import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer"

function Youngadults() {
    return (
        <div>
            <center>
                <div className="caraYA">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/CxXwWTs5/PXL-20231202-232015152.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.postimg.cc/NFst1gBJ/PXL-20231101-235321562.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="YAheading">
                    Christ 4 Life<br />
                    <div className="YAages">
                        18 & Graduated - 25
                    </div>
                    <a
                        href="https://www.instagram.com/c4l_meadowood/"
                        target="_blank"
                        className="YAInstaLink">
                        @c4l_meadowood
                    </a>
                </div>
            </center>
            <Container>
                <Row>
                    <center>
                        <div className="verse">
                            <Row>
                                <div className="col-1" />
                                <div className="miniHeaderYA col-10">
                                    "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect"
                                    <br />
                                    -Romans 12:2 ESV
                                </div>
                            </Row>
                        </div>
                    </center>
                </Row>
            </Container>
            <div className="miniRow3">
                <Container>
                    <div className="youthSchedule">
                        <Row>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    SUNDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">

                                    10am - 11am Sunday morning class - Young Adults room
                                    <br /><br />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    WEDNESDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">
                                    7pm - 8pm Wednesday night class - Young Adults room
                                    <br /><br />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}
export default Youngadults