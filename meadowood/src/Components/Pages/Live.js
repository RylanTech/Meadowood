import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { LiveContext } from "../../Contexts/LiveContext"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Live() {
    const [status, setStatus] = useState({
        liveStatus: "",
        liveLink: "",
        liveTitle: null,
    })

    const { liveStatus, liveLink, liveTitle } = status

    const { getStatus } = useContext(LiveContext)

    useEffect(() => {
        async function gettingStatus() {
            let stat = await getStatus();
            setStatus(stat)
        };
        gettingStatus()
    }, [])

    function ifTitle() {
        if (liveTitle === "") {
            return
        } else if (!liveTitle) {
            return
        } else {
            return (
                <>
                    <h4>
                        <br />
                        Title: {liveTitle}
                    </h4>
                </>
            )
        }
    }

    function isLive() {
        if (liveStatus === "Not Live") {
            return (
                <>
                    <Row>
                        <center>
                            <br />
                            <h3>We aren't live right now, but here is our previous service.</h3>
                            <br />
                        </center>
                        {ifTitle()}
                        <center>
                            <iframe
                                className="col-12 liveVideo"
                                src={liveLink}
                                title="Meadowood Live on Youtube"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </center>
                    </Row>
                </>
            )
        } else if (liveStatus === "Live") {
            return (
                <>
                    <center>
                            <br />
                            <h3>Hello! We are live!</h3>
                            <br />
                        </center>
                    {ifTitle()}
                    <iframe
                        className="col-12 liveVideo"
                        src={liveLink}
                        title="Meadowood Live on Youtube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </>
            )
        } else {
            return (
                <>
                    Error
                </>
            )
        }
    }

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Live page" />
                <meta name="description" content="Meadowood Church of God - Better at 
                the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                Live, Meadowood Church of God LIVE, watch live" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    {isLive()}
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Live