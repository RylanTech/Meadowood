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

    const {editStaff, getOneStaff} = useContext(StaffContext)
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

    },[])

    async function handleSubmit() {
        let member = {
            staffId: params.id,
            name: name,
            title: title,
            position: position,
            description: description,
            imageUrl: imageUrl
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
                        Edit
                    </Button>
                </Row>
            </Container>
        </>
    )
}
export default EditStaff