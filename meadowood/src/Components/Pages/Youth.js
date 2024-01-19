import { useEffect, useState } from "react"
import { Carousel, Container, Row } from "react-bootstrap"

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
                                                src="Images/sp1.png"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp2.png"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp3.png"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-4">
                                    <Carousel fade>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp1.png"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp2.png"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp3.png"
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
                                                src="Images/sp1.png"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp2.png"
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 newFlameImg"
                                                src="Images/sp3.png"
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
                                    src="Images/sp1.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="Images/sp2.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 newFlameImg"
                                    src="Images/sp3.png"
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
                        </center>
                    </Row>
                    {cara()}
                    <Row>
                        {extraDiv()}
                        <div className="col-12 col-lg-8">
                            <div className="newFlameVerse">
                                Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.
                            </div>
                            <cetner>
                                <div className="newFlameVerse2">
                                    <center>1 Timothy 4:12 NIV</center>
                                </div>
                            </cetner>
                        </div>
                    </Row>
                </Container>
            </div >
        </>
    )
}
export default Youth