import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { StaffContext } from "../../Contexts/StaffContext"
import { useNavigate, useParams } from "react-router-dom"

function EditStaff() {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [position, setPosition] = useState(0)
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [redirectLink, setRedirectLink] = useState("")
    const [secondImageUrl, setSeoncdImageUrl] = useState("")
    const [text, setText] = useState("")
    const [isChecked, setisChecked] = useState(false)
    const [isChecked2, setisChecked2] = useState(false)

    const { editStaff, getOneStaff } = useContext(StaffContext)
    let navigate = useNavigate()
    let params = useParams()

    useEffect(() => {
        async function gettingStaff() {
            let res = await getOneStaff(params.id)
            if (res) {
                setName(res.name)
                setTitle(res.title)
                setPosition(res.position)
                setDescription(res.description)
                setImageUrl(res.imageUrl)

            }
        }
        gettingStaff()

    }, [])

    async function handleSubmit() {
        let clcikableType

        if (isChecked === true) {
            clcikableType = "link"
        } else if (isChecked2 === true) {
            clcikableType = "page"
        } else if (
            clcikableType = "off"
        )

        var member = {
            staffId: params.id,
            name: name,
            title: title,
            position: position,
            description: description,
            imageUrl: imageUrl,
            clickableInfo: {
                type: clcikableType,
                link: redirectLink,
                text: text,
                secondImageUrl: secondImageUrl
            }
        }
        if (member.name && member.position) {
            let i = await editStaff(member)
            if (i === null) {
                console.log("error")
            } else {
                navigate('/admin/staff')
            }
        }

    }

    return (
        <>
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
                        <Form.Label>position (Display order from lowest to highest)</Form.Label>
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
                    {isChecked ? (
                        <>
                            <Form.Group>
                                <Form.Label>
                                    Redirect Link (include https://)
                                </Form.Label>
                                <Form.Control
                                value={redirectLink}
                                onChange={(e) => {setRedirectLink(e.target.value)}}/>
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
                                onChange={(e) => {setSeoncdImageUrl(e.target.value)}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Text
                                </Form.Label>
                                <Form.Control
                                value={text}
                                onChange={(e) => {setText(e.target.value)}}/>
                            </Form.Group>
                        </>
                    ) : (
                        <></>
                    )}
                </Row>
                <br />
                <Row>
                    <Button
                        className="col-12"
                        onClick={handleSubmit}>
                        Edit
                    </Button>
                </Row>
            </Container>
        </>
    )
}
export default EditStaff