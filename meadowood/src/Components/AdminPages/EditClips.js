import { useContext, useEffect, useState } from "react"
import { ClipContext } from "../../Contexts/ClipContext"
import { Card, Container, Row } from "react-bootstrap"
import { UserContext } from "../../Contexts/UserContext"
import { Link, useNavigate } from "react-router-dom"

function EditClips() {
    const [clips, setClips] = useState()

    const {getClips} = useContext(ClipContext)
    const {isAdmin} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAdmin === true) {
            console.log("Admin verified")
        } else {
            navigate('/')
        }

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
                        <Link
                        to={`/admin/clips/edit/${clip.clipId}`}
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
                        </Link>
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
export default EditClips