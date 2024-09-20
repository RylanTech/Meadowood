import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import { HeaderContext } from "../../Contexts/HeaderContext"
import { Helmet } from "react-helmet";
import Footer from "../Footer"

function Homepage() {

    const { verify } = useContext(UserContext)
    const { getHeader } = useContext(HeaderContext)
    const [headerLink, setHeaderLink] = useState("")
    const [headerCaption, setHeaderCaption] = useState("")

    useEffect(() => {
        async function fetchData() {
            await verify();
            let hdr = await getHeader();
            setHeaderLink(hdr.headerLink);
            setHeaderCaption(hdr.headerCaption);
        }

        fetchData();
    }, [verify, getHeader]);

    return (
        <>
            <Helmet>
                <meta name="title" content="MWCOG - Homepage" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, 
                Lord, Community, Church community, friendly church, Meadowood,
                Richmond Virginia Church, Richmond VA, Meadowood Church of God Richmond 
                VA, Homepage" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <div className="first-page">
                <div className="fprow">
                    <Container>
                        <Row>
                            <img
                                className="homepageHeader"
                                src={headerLink}
                                alt="Meadowood Church of God"
                            />
                            <div className="homeHeader">
                                {headerCaption}
                            </div>
                        </Row>
                        <Row className="fpr1Content">
                            <div className="col-12 col-md-4 fpcard">
                                <Row>
                                    <div
                                        className="col-3 col-md-12" />
                                    <Link
                                        to={"live"}
                                        className="underlined mainLink col-6 col-md-12">
                                        <br />
                                        <h4
                                            className="mainText">
                                            10am Sunday School
                                            <br />
                                            11am Worship
                                        </h4>
                                    </Link>
                                    <div
                                        className="col-3 col-md-12s" />
                                </Row>
                            </div>
                            <div
                                className="col-md-4 fpcard">
                                <Row>
                                    <div
                                        className="col-3 col-md-12" />
                                    <Link
                                        to={"/events"}
                                        className="underlined mainLink col-6 col-md-12">
                                        <br />
                                        <h4 className="mainText">
                                            Our Events
                                        </h4>
                                    </Link>
                                    <div
                                        className="col-3 col-md-12" />
                                </Row>
                            </div>
                            <div className="col-md-4 fpcard">
                                <Row>
                                    <div
                                        className="col-3 col-md-12" />
                                    <Link
                                        to={"/connect"}
                                        className="underlined mainLink col-6 col-md-12">
                                        <br />
                                        <h4 className="mainText">
                                            Get Connected!
                                        </h4>
                                    </Link>
                                    <div
                                        className="col-3 col-md-12" />
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div className="facebookText">
                                Come follow us on <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.facebook.com/profile.php?id=61550936281949">
                                    <img
                                        className="facebookImg"
                                        alt="facebook"
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                                    />Facebook</a>
                            </div>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row className="fpr2">
                        <div className="positioning1">
                            <p className="heading">
                                Get connected!
                            </p>
                        </div>
                    </Row>
                    {/* </Container> */}
                    <Link to={"/kids"}>
                        <div className="fadein">
                            <img
                                className="fphimg clock"
                                src="./meadowoodPhotos/kids/kids.png"
                                alt="Kids" />
                            <div className="text">
                                <h1>
                                    <center>
                                        Kids
                                    </center>
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/youth"}>
                        <div className="fadein">
                            <img
                                className="fphimg"
                                src="./meadowoodPhotos/nf/newflame-Cover.png"
                                alt="Youth" />
                            <div className="text">
                                <h1>
                                    <center>
                                        Youth
                                    </center>
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/youngadults"}>
                        <div className="fadein">
                            <img
                                className="fphimg"
                                src="./meadowoodPhotos/c4l/youngadults.png"
                                alt="Young Adults" />
                            <div className="text">
                                <h1>
                                    <center>
                                        Young Adults
                                    </center>
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/foodpantry"}>
                        <div className="fadein">
                            <img
                                className="fphimg"
                                src="./meadowoodPhotos/fp/foodpantry2.png"
                                alt="Food Pantry" />
                            <div className="text">
                                <h1>
                                    <center>
                                        Food Pantry
                                    </center>
                                </h1>
                            </div>
                        </div>
                    </Link>

                    <Row className="fpr4">
                        <div className="ytLink2">
                            <Link
                                to="/live"
                                className="ytLink3">
                                Watch now!
                            </Link>
                            <br />
                            <div className="ytLinkText">
                                We have streams every Sunday!
                            </div>
                        </div>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}
export default Homepage