import { Container, Row } from "react-bootstrap"
import Footer from "../Footer"

function Events() {
    return (
        <>
        <Container>
            <Row>
                <center>
                    <br/><br/>
                    <iframe height="800px" className="col-12" src="https://churchhive.app/churcheventsdisplay/meadowood" />
                </center>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default Events