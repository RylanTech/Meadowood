import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Seniors() {
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Young at Heart page" />
                <meta name="description" content="Meadowood Church of God - 
                Better at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, 
                Lord, Community, Church community, friendly church, Meadowood, 
                Richmond Virginia Church, Richmond VA, Meadowood Church of God 
                Richmond VA, Young at Heart ministry, Young at Heart seniors" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="https://i.postimg.cc/brBW0F9c/yah2.png"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="https://i.postimg.cc/RVwLLDR7/yah1.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className="kidsVerse">
                        "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day."
                        <br />
                        -2 Corinthians 4:16 (NIV)
                    </div>
                </Row>
                <Row>
                    <div className="youthSchedule">
                        <Row>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    SUNDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">
                                    10am - 11am Sunday morning class -  Fellowship hall
                                    <br /><br />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    WEDNESDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">
                                    7pm - 8pm Wednesday night class - Fellowship hall
                                    <br /><br />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Seniors