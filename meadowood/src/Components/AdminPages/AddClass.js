import { useState } from "react"
import { Button, Card, Container, Form, Row } from "react-bootstrap"

function AddClasses() {
    const [className, setClassName] = useState();
    const [classSubtitle, setClassSubtitle] = useState();
    const [classLink, setClassLink] = useState();
    const [wednesdayTime, setWednesdayTime] = useState();
    const [sundaySchoolTime, setSundaySchoolTime] = useState();
    const [singleText, setSingleText] = useState();

    return (
        <>
            <Container>
                <br/>
                <Row>
                    <div className="col-md-2"/>
                    <Card className="col-12 col-md-8">
                        <Card.Body>
                            <center>Add Class</center>
                        </Card.Body>
                        Class name
                        <Form.Control/>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default AddClasses