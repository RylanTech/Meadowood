import { useContext, useEffect, useState } from "react"
import { Card, Container, Row } from "react-bootstrap"
import { ClipContext } from "../../Contexts/ClipContext"

function Clips() {
    const [clips, setClips] = useState()

    const {getClips} = useContext(ClipContext)

    useEffect(() => {
        async function gettingClips() {
            let res = await getClips()
            setClips(res)
        }
        gettingClips()
    },[])

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
            <Container>
                <Row>
                    {mapThroughClips()}
                </Row>
            </Container>
        </>
    )
}
export default Clips