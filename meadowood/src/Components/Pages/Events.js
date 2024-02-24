import { Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

function Events() {
    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Events page" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                Events, Church Hive, happenings, Meadowood events" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    <center>
                        <br /><br />
                        <iframe height="800px" className="col-12" src="https://churchhive.app/churcheventsdisplay/meadowood" />
                    </center>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Events