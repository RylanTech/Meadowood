import { useContext, useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { StaffContext } from "../../Contexts/StaffContext"
import { useNavigate } from "react-router-dom"

function CreateStaff() {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [position, setPosition] = useState(0)
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const {createStaff} = useContext(StaffContext)
    let navigate = useNavigate()

    async function handleSubmit() {
        let member = {
            name: name,
            title: title,
            position: position,
            description: description,
            imageUrl: imageUrl
        }
        if (member.name && member.position) {
            let i = await createStaff(member)
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
                            <Form.Label>position (Display order highest)</Form.Label>
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
                </Row>
                <br/>
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