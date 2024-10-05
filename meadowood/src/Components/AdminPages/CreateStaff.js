import { useContext, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { StaffContext } from "../../Contexts/StaffContext"
import { useNavigate, useParams } from "react-router-dom"
import { Helmet } from "react-helmet"

function CreateStaff() {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [position, setPosition] = useState(0)
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [isChecked, setisChecked] = useState(false)
    const [isChecked2, setisChecked2] = useState(false)
    const [redirectLink, setRedirectLink] = useState("")
    const [secondImageUrl, setSeoncdImageUrl] = useState("")
    const [text, setText] = useState("")

    const { createStaff } = useContext(StaffContext)
    let navigate = useNavigate()

    async function handleSubmit() {
        let clcikableType; // Fix typo in variable name
    
        if (isChecked === true) {
            clcikableType = "link"; // Fix typo in variable name
        } else if (isChecked2 === true) {
            clcikableType = "page"; // Fix typo in variable name
        } else {
            clcikableType = "off"; // Fix typo in variable name
        }
    
        let member = {
            name: name,
            title: title,
            position: position,
            description: description,
            imageUrl: imageUrl,
            clickableInfo: {
                type: clcikableType, // Use the corrected variable name
                link: redirectLink,
                text: text,
                secondImageUrl: secondImageUrl,
            },
        };

        console.log(member)
    
        if (member.name && member.position) {
            try {
                let i = await createStaff(member);
                if (i === null) {
                    console.log("error");
                } else {
                    navigate('/admin/staff');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    

    function ifPhoto(photo) {
        if (photo === "") {
            return <></>
        } else {
            return (
                <>
                    <img src={photo}
                        alt="meadowood"
                        className="col-12 aboutPhoto" />
                </>
            )
        }
    }

    function ifDesc(desc) {
        if (desc === "") {
            return <></>
        } else {
            return (
                <div className="aboutDesc">
                    {desc}
                </div>
            )
        }
    }

    function returnConditional() {
        if (isChecked) {
            return (
                <>
                    <a href={redirectLink} className="redirectProfile" target="_blank">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="aboutProfile">
                                {ifPhoto(imageUrl)}
                                <div className="aboutName">
                                    {name}
                                </div>
                                <div className="aboutTitle">
                                    {title}
                                </div>
                                {ifDesc(description)}
                            </div>
                        </div>
                    </a>
                </>
            )
        } else if (isChecked2) {
            return (
                <>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="aboutProfile">
                            {ifPhoto(imageUrl)}
                            <div className="aboutName">
                                {name}
                            </div>
                            <div className="aboutTitle">
                                {title}
                            </div>
                            {ifDesc(description)}
                        </div>
                    </div>
                    <br/><br/>
                    <Row>
                        <div className="col-12 col-md-3">
                            <img
                                className="col-12"
                                src={secondImageUrl} />
                        </div>
                        <div className="col-12 col-md-9 secondText" style={{ whiteSpace: 'pre-wrap' }}>
                            {text}
                        </div>

                    </Row>
                </>
            )
        } else {
            return (
                <>
                    <div className="col-12 col-md-6 col-lg-4 redirectProfile">
                        <div className="aboutProfile">
                            {ifPhoto(imageUrl)}
                            <div className="aboutName">
                                {name}
                            </div>
                            <div className="aboutTitle">
                                {title}
                            </div>
                            {ifDesc(description)}
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <Row>
                    <br />
                    <div className="col-12 col-md-6">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                    <div className="col-12">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Label>position (Display order highest) - do not leave 0</Form.Label>
                        <Form.Control
                            value={position}
                            onChange={(e) => { setPosition(e.target.value) }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            value={imageUrl}
                            onChange={(e) => { setImageUrl(e.target.value) }}
                        />
                    </div>
                    <br />
                    <center>
                        Does clicking the profile redirect?
                        <Form.Check.Input
                            type={"checkbox"}
                            checked={isChecked}
                            onClick={() => {
                                if (isChecked === true) {
                                    setisChecked(false)
                                } else if (isChecked === false && isChecked2 === false) {
                                    setisChecked(true)
                                } else if (isChecked2 === true) {
                                    setisChecked2(false)
                                    setisChecked(true)
                                }
                            }} />
                        <br />
                        Does clicking the profile show more details?
                        <Form.Check.Input
                            type={"checkbox"}
                            checked={isChecked2}
                            onClick={() => {
                                if (isChecked2 === true) {
                                    setisChecked2(false)
                                } else if (isChecked2 === false && isChecked === false) {
                                    setisChecked2(true)
                                } else if (isChecked === true) {
                                    setisChecked(false)
                                    setisChecked2(true)
                                }
                            }} />
                    </center>
                </Row>
                <Row>
                    {isChecked ? (
                        <>
                            <Form.Group>
                                <Form.Label>
                                    Redirect Link (include https://)
                                </Form.Label>
                                <Form.Control
                                    value={redirectLink}
                                    onChange={(e) => { setRedirectLink(e.target.value) }} />
                            </Form.Group>
                        </>
                    ) : (
                        <></>
                    )}
                    {isChecked2 ? (
                        <>
                            <Form.Group>
                                <Form.Label>
                                    2nd Image Url
                                </Form.Label>
                                <Form.Control
                                    value={secondImageUrl}
                                    onChange={(e) => { setSeoncdImageUrl(e.target.value) }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Text
                                </Form.Label>
                                <textarea
                                    className="col-12"
                                    rows={12}
                                    value={text}
                                    onChange={(e) => { setText(e.target.value) }} />
                            </Form.Group>
                        </>
                    ) : (
                        <></>
                    )}
                </Row>
                <Row>
                    <center>
                        {returnConditional()}
                    </center>
                </Row>
                <br />
                <Row>
                    <Button
                        className="col-12"
                        onClick={handleSubmit}>
                        Create
                    </Button>
                </Row>
            </Container>
        </>
    )
}
export default CreateStaff