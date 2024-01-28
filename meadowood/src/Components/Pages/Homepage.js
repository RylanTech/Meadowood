import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import { HeaderContext } from "../../Contexts/HeaderContext"
import Footer from "../Footer"

function Homepage() {

    const { verify } = useContext(UserContext)
    const { getHeader } = useContext(HeaderContext)
    const [headerLink, setHeaderLink] = useState("")
    const [headerCaption, setHeaderCaption] = useState("")

    useEffect(() => {
        verify()

        async function gettingHeader() {
            let hdr = await getHeader()
            console.log(hdr)
            setHeaderLink(hdr.headerLink)
            setHeaderCaption(hdr.headerCaption)
        }
        gettingHeader()

    },[])

    return (
        <div className="first-page">
            <div className="fprow">
                <Container>
                    <Row>
                        <img
                            className="homepageHeader"
                            src={headerLink}
                            alt="Images/bg2.jpg"
                        />
                        <div className="homeHeader">
                            {headerCaption}
                        </div>
                    </Row>
                    <Row className="fpr1Content">
                        <div className="col-md-4 fpcard clock">
                            <center>
                                <Link to={"live"} className="underlined mainLink">
                                    {/* <img className="col-4 fpimg" src="Images/clock2.png" /> */}
                                    <br />
                                    <h4 className="mainText">
                                        10am Sunday School
                                        <br />
                                        11am Worship
                                    </h4>
                                </Link>
                            </center>
                        </div>
                        <div className="col-md-4 fpcard">
                            <center>
                                <Link to={"/events"} className="underlined mainLink">
                                    {/* <img className="col-3 col-md-6" src="Images/cal.png" /> */}
                                    <br />
                                    <h4 className="mainText">
                                        Our Events
                                    </h4>
                                </Link>
                            </center>
                        </div>
                        <div className="col-md-4 fpcard">
                            <center>
                                <a target="_blank" href="https://www.youtube.com/@pastordunn" className="ytLink mainLink">
                                    {/* <img className="col-4 fpimg" src="Images/youtube.png" /> */}
                                    <br />
                                    <h4 className="mainText underlined">
                                        View Services
                                    </h4>
                                </a>
                            </center>
                        </div>
                    </Row>
                    <Row>
                        <center>
                            <div className="facebookText">
                                Come follow us on <a
                                    href="https://www.facebook.com/profile.php?id=61550936281949">
                                    <img
                                        className="facebookImg"
                                        target="_blank"
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                                    />Facebook</a>
                            </div>
                        </center>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="fpr2">
                    <div className="positioning1">
                        <p className="heading">
                            <center>
                                Get connected!
                            </center>
                        </p>
                    </div>
                </Row>
                {/* </Container> */}
                <Link to={"/kids"}>
                    <div className="fadein">
                        <img className="fphimg clock" src="Images/kids.png" />
                        <div className="text">
                            <center>
                                <h1>Kids</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youth"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youth.png" />
                        <div className="text">
                            <center>
                                <h1>Youth</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youngadults"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youngadults.png" />
                        <div className="text">
                            <center>
                                <h1>Young Adults</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/foodpantry"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/foodpantry.png" />
                        <div className="text">
                            <center>
                                <h1>Food Pantry</h1>
                            </center>
                        </div>
                    </div>
                </Link>

                <Row className="fpr4">
                    <center>
                        <div className="ytLink2">
                            <a target="_blank" href="https://www.youtube.com/@pastordunn" className="ytLink3">
                                Watch now!
                            </a>
                            <br />
                            <div className="ytLinkText">
                                We have streams every Sunday and Wednesday!
                            </div>
                        </div>
                    </center>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}
export default Homepage