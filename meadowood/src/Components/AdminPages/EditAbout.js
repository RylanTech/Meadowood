import { useContext, useEffect, useState } from "react"
import { AboutContext } from "../../Contexts/AboutContext";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function EditAbout() {
    const [aboutText, setAboutText] = useState(undefined)
    const [aboutTitle, setAboutTitle] = useState(undefined)
    const [message, setMessage] = useState(undefined)

    const { getText, editAbout } = useContext(AboutContext)
    let navigate = useNavigate()

    useEffect(() => {
        async function gettingAbout() {
            let res = await getText();
            if (res) {
                console.log(res)
            setAboutText(res.aboutText)
            setAboutTitle(res.aboutTitle)
            }
        }
        gettingAbout()
    }, [])

    function handleSubmit() {
        let newAbout = {
            aboutText: aboutText,
            aboutTitle: aboutTitle
        }
        let res = editAbout(newAbout)
        if (res) {
            navigate('/admin')
        } else {
            setMessage("Something went wrong")
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <Row>
                    <div className="col-12 aboutPeopleHeading">
                        {aboutTitle}
                    </div>
                    <div className="col-12">
                        {aboutText ? (
                            <div dangerouslySetInnerHTML={{ __html: aboutText.replace(/\n/g, '<br />') }} />
                        ) : (
                            <>
                            </>
                        )}
                    </div>
                </Row>
                <br/><br/>
                <Row>
                    <Form.Group>
                        <Form.Label>
                            Title
                        </Form.Label>
                        <Form.Control
                            value={aboutTitle}
                            onChange={(e) => { setAboutTitle(e.target.value) }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Body
                        </Form.Label>
                        <div className="adminTxtArea">
                            <textarea
                                className="col-12"
                                rows={12}
                                value={aboutText}
                                onChange={(e) => { setAboutText(e.target.value) }}
                            />
                        </div>
                    </Form.Group>
                    <Row>
                        {message ? (
                            <>
                                <div className="col-12 message">{message}</div>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <div>
                        <br/><br/>
                    </div>
                    <Button
                        onClick={handleSubmit}
                        className="col-12"
                    >
                        Submit
                    </Button>
                    <div>
                        <br/><br/>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default EditAbout