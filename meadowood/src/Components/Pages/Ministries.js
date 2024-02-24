import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Ministries() {
    return (
        <>
            {/* <Helmet>
                <meta name="title" content="MW COG -  page" />
                <meta name="description" content="Meadowood Church of God - Better at the Meadowodd" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, Community, Church community, friendly church, Meadowood, Richmond Virginia Church, Richmond VA, Meadowood Church of God Richmond VA" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet> */}
            <div>
                <br />
                <Container>
                    <Link to={"/kids"}>
                        <div className="fadein">
                            <img className="fphimg clock" src="Images/kids.png" />
                            <div className="text">
                                <center>
                                    <h1>Kids!</h1>
                                </center>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/youth"}>
                        <div className="fadein">
                            <img className="fphimg" src="Images/youth.png" />
                            <div className="text">
                                <center>
                                    <h1>Youth!</h1>
                                </center>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/youngadults"}>
                        <div className="fadein">
                            <img className="fphimg" src="Images/youngadults.png" />
                            <div className="text">
                                <center>
                                    <h1>Young Adults!</h1>
                                </center>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/foodpantry"}>
                        <div className="fadein">
                            <img wclassName="fphimg" src="Images/foodpantry.png" />
                            <div className="text">
                                <center>
                                    <h1>Food Pantry!</h1>
                                </center>
                            </div>
                        </div>
                    </Link>
                </Container>
                <Footer />
            </div>
        </>
    )
}
export default Ministries