import { useEffect, useState } from "react"
import { Carousel, Container, Row } from "react-bootstrap"
import Footer from "../Footer";
import { Helmet } from "react-helmet";

function Youth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {

    }, [])

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    function extraDiv() {
        if (screenWidth > 992) {
            return <div className="col-2" />
        }
    }

    function cara() {
        if (screenWidth > 992) {
            //large
            return (
                <>
                    <Row>
                        <div className="col-12">
                            <Row>
                                <div className="col-4 firstCara">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/newflame2.png"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf4.jpg"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/newflame3.png"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-4 secondCara">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/drama.jpg"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf6.png"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf7.jpg"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-4 thirdCara">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf10.png"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf8.jpg"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="./meadowoodPhotos/nf/nf9.jpg"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </>
            )
        } else {
            //small
            return (
                <>
                    <Row>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/newflame2.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf4.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/newflame3.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/drama.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf6.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf7.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf10.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf8.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="./meadowoodPhotos/nf/nf9.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </>
            )
        }
    }

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Youth page" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                Youth class, Newflame student ministries, Newflame Students, Newflame youth" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <div className="newFlamePage">
                <Container>
                    <Row>
                        <center>
                            <div className="newFlame">
                                Newflame
                            </div>
                            <div className="studentM">
                                Student Ministries
                            </div>
                            <div className="newFlameWhoFor">
                                7th grade - 18 & graduated
                            </div>
                            <div className="newFlameInsta">
                                <img
                                    className="newFlameImg2"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                                />
                                <a
                                    className="nfInstaLink"
                                    href="https://www.instagram.com/newflame_sm/">@newflamesm</a>
                            </div>
                        </center>
                    </Row>
                    {cara()}
                    <Row>
                        {extraDiv()}
                        <div className="col-12 col-lg-8">
                            <center>
                                <div className="newFlameVerse">
                                    Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.
                                </div>

                                <div className="newFlameVerse2">
                                    <center>1 Timothy 4:12 NIV</center>
                                </div>

                                <div className="newFlameVerse">
                                    New Flame Student ministries is the youth group at Meadowood Church of God. We believe we are the NOW generation, not just the next generation. We can make a diference for Christ TODAY. Led by Pastor Daniel Billings, Daniel's vision is to create an evoirnment that is safe enough for students to be vulnerable and grow closer to God and each other.
                                </div>
                            </center>
                        </div>
                    </Row>
                    <Row>
                        <div className="youthSchedule">
                            <Row>
                                <div className="col-12 col-md-6">
                                    <div className="youthScheduleHeader">
                                        SUNDAYS @ CHURCH
                                    </div>
                                    <div className="youthScheduleContent">

                                        10am - 11am Sunday morning class - youth room
                                        <br /><br />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="youthScheduleHeader">
                                        WEDNESDAYS @ CHURCH
                                    </div>
                                    <div className="youthScheduleContent">

                                        6pm - 7pm Hang out time - gym
                                        <br /><br />
                                        7pm - 8pm Wednesday night class - gym
                                        <br /><br />
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
                <a className="surprise" href="https://i.postimg.cc/PJDBSv0P/PXL-20240128-144419141.jpg">
                    Doggo
                </a>
            </div >
            <Footer />
        </>
    )
}
export default Youth