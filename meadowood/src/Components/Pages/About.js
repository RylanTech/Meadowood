import { Container, Row } from "react-bootstrap"
import Footer from "../Footer"
import { useContext, useEffect, useState } from "react"
import { StaffContext } from '../../Contexts/StaffContext'
import { Helmet } from "react-helmet"
import { AboutContext } from "../../Contexts/AboutContext"
import { Link } from "react-router-dom"

function About() {
    const [staff, setStaff] = useState()
    const [aboutText, setAboutText] = useState(undefined)
    const [aboutTitle, setAboutTitle] = useState(undefined)

    const { getAllStaff } = useContext(StaffContext)
    const { getText } = useContext(AboutContext)

    useEffect(() => {
        async function gettingStaff() {
            let res = await getAllStaff()
            setStaff(res)
        }
        async function gettingAbout() {
            let res = await getText();
            if (res) {
                setAboutText(res.aboutText)
                setAboutTitle(res.aboutTitle)
            }
        }

        gettingAbout()
        gettingStaff()
    }, [])

    // let staff = [
    //     {
    //         "position": 2,
    //         "title": "Pastor",
    //         "name": "Richard Dunn",
    //         "description": "",
    //         "imageUrl": "https://i.postimg.cc/B61qDZpk/358538967-116370081515544-2905107769366832551-n.jpg"
    //     },
    //     {
    //         "position": 1,
    //         "title": "Youth Pastor",
    //         "name": "Daniel Billings",
    //         "description": `"Don't be an idiot." Changed my life -Dwight Schrute`,
    //         "imageUrl": "https://i.postimg.cc/26RTx2mG/daniel.jpg"
    //     }
    // ]

    function mapStaff() {
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


        let mapStaff = staff.sort((a, b) => b.position - a.position);

        return mapStaff.map((member) => {

            if (member.clickableInfo) {
                let clickableInfo = JSON.parse(member.clickableInfo)

                if (clickableInfo.type === "link") {
                    return (
                        <>
                            <a
                                className="redirectProfile col-12 col-md-6 col-lg-4"
                                href={clickableInfo.link}
                                target="_blank">
                                <div>
                                    <div className="aboutProfile">
                                        {ifPhoto(member.imageUrl)}
                                        <div className="aboutName">
                                            {member.name}
                                        </div>
                                        <div className="aboutTitle">
                                            {member.title}
                                        </div>
                                        {ifDesc(member.description)}
                                    </div>
                                </div>
                            </a>
                        </>
                    )
                } else if (clickableInfo.type === "page") {
                    return (
                        <>
                            <Link
                                to={`/staff/${member.staffId}`}
                                className="redirectProfile col-12 col-md-6 col-lg-4">
                                <div className="col-12">
                                    <div className="aboutProfile">
                                        {ifPhoto(member.imageUrl)}
                                        <div className="aboutName">
                                            {member.name}
                                        </div>
                                        <div className="aboutTitle">
                                            {member.title}
                                        </div>
                                        {ifDesc(member.description)}
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                } else {
                    return (
                        <>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="aboutProfile">
                                    {ifPhoto(member.imageUrl)}
                                    <div className="aboutName">
                                        {member.name}
                                    </div>
                                    <div className="aboutTitle">
                                        {member.title}
                                    </div>
                                    {ifDesc(member.description)}
                                </div>
                            </div>
                        </>
                    )
                }
            } else {
                return (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="aboutProfile">
                                {ifPhoto(member.imageUrl)}
                                <div className="aboutName">
                                    {member.name}
                                </div>
                                <div className="aboutTitle">
                                    {member.title}
                                </div>
                                {ifDesc(member.description)}
                            </div>
                        </div>
                    </>
                )
            }
        })
    }

    return (
        <>
            <Helmet>
                <meta name="title" content="MW COG - About" />
                <meta name="description" content="Meadowood Church of God - Better at the Meadow" />
                <meta name="keywords" content="Church of God, Church, God, Jesus, Lord, Community, 
                Church community, friendly church, Meadowood, Richmond Virginia Church, 
                Richmond VA, Meadowood Church of God Richmond VA, About us, find out more" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
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
                <Row>
                    <div
                        className="col-12 aboutPeopleHeading">
                        Staff
                    </div>
                </Row>
                <Row>
                    {staff ? (
                        mapStaff()
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default About