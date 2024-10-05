import { useContext, useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { UserContext } from '../../Contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Loginpage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();

    const { login } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit() {
        try {
            let credentials = {
                username,
                password
            }
            let res = await login(credentials)
            console.log(res)
            if (res.status === 200) {
                navigate('/admin')
            } else if (res.status === 203) {
                setMessage("Incorrect username or password")
            }
        } catch {
            navigate('/login')
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Container>
                <br /><br /><br />
                <Row>
                    <div className='col-md-2' />
                    <div className='col-12 col-md-8'>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                </Row>
                <center>
                    <br />
                    <Row>
                        <div className='col-md-2' />
                        <div className='col-12 col-md-8'>
                            {message ? (
                                <>
                                    <div className='message'>
                                        {message}
                                    </div>
                                    <br />
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                    </Row>
                    <Row>
                        <Link>
                            <div className='col-md-2' />
                            <Button
                                onClick={handleSubmit}
                                className='col-12 col-md-8'
                            >Login</Button>
                        </Link>
                    </Row>
                    <br />
                </center>
            </Container>
        </>
    )
}
export default Loginpage