import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Kids() {
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Kids page" />
                <meta name="description" content="Meadowood Church of God - 
                Better at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, 
                Lord, Community, Church community, friendly church, Meadowood, 
                Richmond Virginia Church, Richmond VA, Meadowood Church of God 
                Richmond VA, Meadowood Kids, kids page, fun" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="https://plus.unsplash.com/premium_photo-1664478361973-d1632c3194c6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className="kidsVerse">
                        "Train up a child in the way he should go; even when he is old he will not depart from it."
                        <br />
                        -Proverbs 22:6 ESV
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

                                    10am - 11am Sunday morning class - Kids room
                                    <br /><br />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    WEDNESDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">
                                    7pm - 8pm Wednesday night class - Kids room
                                    <br /><br />
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Kids