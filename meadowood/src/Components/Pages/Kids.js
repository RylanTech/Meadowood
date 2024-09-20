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
                                src="./meadowoodPhotos/kids/message.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="./meadowoodPhotos/kids/PXL-20240310-173329794-MP.jpg"
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