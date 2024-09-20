import { Carousel, Container, Row } from "react-bootstrap"
import Footer from '../Footer'
import { Helmet } from "react-helmet"

function Foodpantry() {
    return (
        <>
             <Helmet>
                <meta name="title" content="MW COG - Food Pantry page" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                food pantry, feed more, giving" />
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
                                src="./meadowoodPhotos/fp/foodpantry1.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 forceCaraAspect"
                                src="./meadowoodPhotos/fp/PXL_20240317_171237996.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <img
                        className="col-12 col-md-4"
                        src="https://i.postimg.cc/dQ5V4qmC/Feed-More-logo-for-blog.png" />
                    <div className="col-12 col-md-8">
                        <div className="col-12 feedMoreSchedule">
                            <div className="feedMoreScheduleHeader">
                                THURSDAYS @ CHURCH
                            </div>
                            <div className="feedMoreScheduleContent">

                                4pm every 2nd & 4th Thursday - Gym
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Foodpantry