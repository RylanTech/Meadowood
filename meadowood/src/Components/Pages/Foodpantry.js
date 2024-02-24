import { Container, Row } from "react-bootstrap"
import Footer from '../Footer'
import { Helmet } from "react-helmet"

function Foodpantry() {
    return (
        <>
             <Helmet>
                <meta name="title" content="MW COG - Food Pantry page" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond 
                Virginia Church, Richmond VA, Meadowood Church of God Richmond VA,
                food pantry, feed more, giving" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <Container>
                <Row>
                    <img src="https://i.postimg.cc/fyCtvmWS/428924754-384449354484246-3216635529621801509-n.jpg" />
                </Row>
                <Row>
                    <img
                        className="col-12 col-md-4"
                        src="https://i.postimg.cc/dQ5V4qmC/Feed-More-logo-for-blog.png" />
                    <div className="col-12 col-md-8">
                        <div className="col-12 feedMoreSchedule">
                            <div className="feedMoreScheduleHeader">
                                THURSDAYS @ CHURCH
                            </div>
                            <div className="feedMoreScheduleContent">

                                4pm every 2nd & 4th Thursday - Gym
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Foodpantry