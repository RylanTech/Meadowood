import { Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Classes() {

    let classes = [
        {
            classId: 0,
            className: "Nursery",
            classSubtitle: "(Available for parents)",
            classLink: undefined,
            wednesdayTime: undefined,
            sundayschooltime: "11am-12pm",
            singleText: undefined
        },
        {
            classId: 1,
            className: "Toddler",
            classSubtitle: undefined,
            classLink: undefined,
            wednesdayTime: undefined,
            sundayschooltime: "11am-12pm",
            singleText: undefined
        },
        {
            classId: 2,
            className: "K - 6th Grade",
            classSubtitle: undefined,
            classLink: "/kids",
            wednesdayTime: "Every 3rd Wed, 7pm-8pm",
            sundayschooltime: "11am-12pm",
            singleText: undefined
        },
        {
            classId: 3,
            className: "7th grade - 18",
            classSubtitle: undefined,
            classLink: "/youth",
            wednesdayTime: "6pm-8pm",
            sundayschooltime: "10am-11am",
            singleText: undefined
        },
        {
            classId: 4,
            className: "18 & Graduated - 25",
            classSubtitle: undefined,
            classLink: "/youngadults",
            wednesdayTime: "7pm-8pm",
            sundayschooltime: "10am-11am",
            singleText: undefined
        },
        {
            classId: 5,
            className: "Ultimate Adults",
            classSubtitle: undefined,
            classLink: "/ultimate",
            wednesdayTime: undefined,
            sundayschooltime: "10am-11am",
            singleText: undefined
        },
        {
            classId: 6,
            className: "Adults",
            classSubtitle: undefined,
            classLink: undefined,
            wednesdayTime: "7pm-8pm",
            sundayschooltime: "10am-11am",
            singleText: undefined
        },
        {
            classId: 7,
            className: "55+",
            classSubtitle: undefined,
            classLink: undefined,
            wednesdayTime: undefined,
            sundayschooltime: undefined,
            singleText: "Scheduled once a month"
        }
    ]

    function mapThroughClasses() {
        return classes.map((classItem) => {
            return (
                <>
                    <Row>
                        <div className="classHeader col-5 col-md-4">
                            {classItem.classLink ? (
                                <>
                                    <Link className="classHeader col-5 col-md-3"
                                        to={classItem.classLink}>
                                        {classItem.className}
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {classItem.className}
                                </>
                            )}
                        </div>
                        {classItem.singleText ? (
                            <>
                                <div className="classContent col-5 col-md-5">
                                    {classItem.singleText}
                                </div>
                            </>
                        ) :
                            <>
                                <div className="classContent col-3 col-md-4">
                                    {classItem.wednesdayTime}
                                </div>
                                <div className="classContent col-4">
                                    {classItem.sundayschooltime}
                                </div>
                            </>}
                    </Row>
                    {classItem.classSubtitle ? (
                        <>
                            <Row>
                                <div
                                    className="afp">
                                    {classItem.classSubtitle}
                                </div>
                            </Row>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <hr />
                </>
            )
        });
    }

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - Classes" />
                <meta name="description" content="Meadowood Church of God - Better at the 
                Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, 
                Community, Church community, friendly church, Meadowood, Richmond Virginia 
                Church, Richmond VA, Meadowood Church of God Richmond VA, Classes page,
                find out more" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>

            <Container>
                <br />
                <Row>
                    <div className="classHeader col-4">
                        Class
                    </div>
                    <div className="classHeader col-4">
                        Wednesday
                    </div>
                    <div className="classHeader col-4">
                        Sunday School
                    </div>
                    <hr />
                </Row>

                {mapThroughClasses()}
            </Container>

            {/* <Container>
                <br />
                    </div>
                    <div className="classHeader col-4">
                        Wednesday
                    </div>
                    <div className="classHeader col-4">
                        Sunday School
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-8">
                        Nurery
                    </div>
                    <div className="classContent col-4">
                        11am-12pm
                    </div>
                </Row>
                <Row>
                    <div
                        className="afp">
                        (Available for parents)
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-5 col-md-4">
                        Toddler
                    </div>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        11am-12pm
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/kids'>
                        K - 6th Grade
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        Every 3rd Wed, 7pm-8pm
                    </div>
                    <div className="classContent col-4">
                        11am-12pm
                    </div>
                </Row>
                <Row>
                    <div
                        className="afp">
                        (Children's Church)
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/youth'>
                        7th grade - 18
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        6pm-8pm
                    </div>
                    <div className="classContent col-4">
                        10am-11am
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/youngadults'>
                        18 & Graduated - 25
                    </Link>
                    <div className="classContent col-3 col-md-4">
                        6pm-8pm
                    </div>
                    <div className="classContent col-4">
                        10am-11am
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-5 col-md-4"
                        to='/ultimate'>
                        Ultimate Adults
                    </Link>
                    <div className="classContent col-3 col-md-4">

                    </div>
                    <div className="classContent col-4">
                        10am-11am
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="classHeader col-5 col-md-4">
                        Adults
                    </div>
                    <div className="classContent col-3 col-md-4">
                        7pm-8pm
                    </div>
                    <div className="classContent col-4">
                        10am-11am
                    </div>
                </Row>
                <hr />
                <Row>
                    <Link className="classHeader col-4 col-md-3"
                        to='/youngatheart'>
                        55+
                    </Link>
                    <div className="classContent col-8 col-md-9">
                        <center>
                            Scheduled once a month
                        </center>
                    </div>
                </Row>
            </Container> */}
            <br /><br /><br /><br />
            <Footer />
        </>
    )
}
export default Classes