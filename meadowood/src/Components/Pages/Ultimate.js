import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Ultimate() {
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Ultimate Adults page" />
                <meta name="description" content="Meadowood Church of God - 
                Better at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, 
                Lord, Community, Church community, friendly church, Meadowood, 
                Richmond Virginia Church, Richmond VA, Meadowood Church of God 
                Richmond VA, Ultimate class, Ultimate adults, Ultimate" />
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
                                src="./meadowoodPhotos/u/PXL_20240313_171848356.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="./meadowoodPhotos/u/PXL_20240313_171916941.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className="kidsVerse">
                        "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
                        <br />
                        -Proverbs 3:5-6 (NIV)
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

                                    10am - 11am Sunday morning class - Ultimate room
                                    <br /><br />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="YAScheduleHeader">
                                    WEDNESDAYS @ CHURCH
                                </div>
                                <div className="YAScheduleContent">
                                    7pm - 8pm Wednesday night class - Ultimate room
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
export default Ultimate