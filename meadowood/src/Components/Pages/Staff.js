import { useContext, useEffect, useState } from "react"
import Footer from "../Footer"
import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { StaffContext } from "../../Contexts/StaffContext"

function Staff() {
    const [staff, setStaff] = useState()
    const [clickableInfo, setClickableInfo] = useState()

    const { getOneStaff } = useContext(StaffContext)
    let params = useParams()

    useEffect(() => {
        async function gettingStaff() {
            let res = await getOneStaff(params.id)
            setClickableInfo(JSON.parse(res.clickableInfo))
            setStaff(res)
            console.log(res)
        }
        gettingStaff()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <br />
                    {clickableInfo ? (
                        <>
                            <div className="col-12 col-md-3">
                                <img className="col-12" src={clickableInfo.secondImageUrl} />
                            </div>
                            <div className="col-12 col-md-9 secondText" style={{ whiteSpace: 'pre-wrap' }}>
                                {clickableInfo.text}
                            </div>
                        </>
                    ) : (
                        <>
                            <center>
                                Loading...
                            </center>
                        </>
                    )}
                    
                </Row>
                <br /><br /><br />
            </Container>
            <Footer />
        </>
    )
}
export default Staff