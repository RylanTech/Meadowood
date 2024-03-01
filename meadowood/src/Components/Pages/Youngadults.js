import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Youngadults() {
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Young Adult page" />
                <meta name="description" content="Meadowood Church of God - 
                Better at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, 
                Jesus, Lord, Community, Church community, friendly church, 
                Meadowood, Richmond Virginia Church, Richmond VA, Meadowood 
                Church of God Richmond VA, Young Adults, Christ 4 life, Christ
                for life, Bible study, young adults bible study" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <div>
                <center>
                    <div className="caraYA">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 forceCaraAspect"
                                    src="https://i.postimg.cc/CxXwWTs5/PXL-20231202-232015152.jpg"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 forceCaraAspect"
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
                                        "Do not be conformed to this world, but be transformed by the renewal of your mind,
                                        that by testing you may discern what is the will of God, what is good and acceptable
                                        and perfect"
                                        <br />
                                        -Romans 12:2 ESV
                                    </div>
                                </Row>
                            </div>
                        </center>
                    </Row>
                    <Row>
                        <div className="YAdesc">
                            At Christ for Life Ministries, our ultimate goal is to help you establish a deep and meaningful
                            relationship with God. We understand that this journey can be challenging, but we strive to provide
                            you with the support and guidance you need to grow closer to Him. Our ministry is centered on
                            discipleship and empowering our members to do the work of the Lord. Our hope is that through our
                            outreach efforts, you will be transformed into the image of our Lord and Savior, Jesus Christ. We
                            understand the importance of this journey and want to walk alongside you every step of the way.
                        </div>
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
                <Footer />
            </div>
        </>
    )
}
export default Youngadults