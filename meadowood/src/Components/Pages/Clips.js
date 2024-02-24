import { useContext, useEffect, useState } from "react"
import { Card, Container, Row } from "react-bootstrap"
import { ClipContext } from "../../Contexts/ClipContext"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Clips() {
    const [clips, setClips] = useState()

    const { getClips } = useContext(ClipContext)

    useEffect(() => {
        async function gettingClips() {
            let res = await getClips()
            setClips(res)
        }
        gettingClips()
    }, [])

    function mapThroughClips() {
        if (clips) {
            return clips.map((clip) => {
                return (
                    <>
                        <a
                            href={clip.clipURL}
                            target="_blank"
                            className="col-12 col-sm-6 col-lg-4 thumbnailLink"
                            key={clip.clipId}
                        >
                            <Card className="clipCard">
                                <Card.Header>
                                    <Card.Img className="clipThumbnail" src={clip.clipThumbnail} />
                                </Card.Header>
                                <Card.Body>
                                    {clip.clipTitle}
                                </Card.Body>
                            </Card>
                        </a>
                    </>
                )
            })
        }
    }

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Clips page" />
                <meta name="description" content="Meadowood Church of God - Better 
                at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                Clips page, Meadowood annocements" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    {mapThroughClips()}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Clips